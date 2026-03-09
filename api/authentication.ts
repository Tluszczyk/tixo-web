import { account, functions, tablesDB } from '~/api/appwriteClient'
import { ExecutionMethod, type Models, OAuthProvider, AppwriteException, Query } from 'appwrite'

export enum LoginStatus {
  OK,
  INVALID_CREDENTIALS,
  USER_ALREADY_EXISTS,
  USER_BLOCKED,
  RATE_LIMIT_EXCEEDED,
  INVALID_FORMAT, // Email or Password format
  PASSWORD_RECENTLY_USED,
  UNKNOWN_ERROR,
}

export interface AuthResult {
  status: LoginStatus
  message?: string
}

export interface RatingRecord extends Models.Row {
  userId: string;
  rating: number;
  ratingDeviation: number;
  volatility: number;
}

class AuthService {
  private handleAuthError(e: unknown, mapping: Record<string, LoginStatus>): AuthResult {
    if (e instanceof AppwriteException) {
      return {
        status: mapping[e.type] ?? LoginStatus.UNKNOWN_ERROR,
        message: e.message,
      }
    }
    return {
      status: LoginStatus.UNKNOWN_ERROR,
      message: e instanceof Error ? e.message : 'Unknown error',
    }
  }

  /**
   * Registers a new user and logs them in.
   *
   * @param email The user's email.
   * @param password The user's password.
   * @param name The user's name.
   * @returns A Promise that resolves with the AuthResult.
   */
  async register(email: string, password: string, name: string): Promise<AuthResult> {
    try {
      // Sanitize name to be a valid Appwrite ID (alphanumeric, hyphens, underscores, periods)
      const userId = name.toLowerCase().replace(/[^a-z0-9\._-]/g, '-')
      await account.create(userId, email, password, name)
      return await this.login(email, password)
    } catch (e) {
      return this.handleAuthError(e, {
        user_already_exists: LoginStatus.USER_ALREADY_EXISTS,
        user_invalid_email: LoginStatus.INVALID_FORMAT,
        user_invalid_password: LoginStatus.INVALID_FORMAT,
        general_rate_limit_exceeded: LoginStatus.RATE_LIMIT_EXCEEDED,
      })
    }
  }

  /**
   * Authenticates a user with the backend using email and password to obtain a cookie.
   *
   * @param email The user's email.
   * @param password The user's password.
   * @returns A Promise that resolves with the authentication cookie string, or rejects on failure.
   */
  async login(email: string, password: string): Promise<AuthResult> {
    try {
      await account.createEmailPasswordSession({
        email: email,
        password: password,
      })
      return { status: LoginStatus.OK }
    } catch (e) {
      return this.handleAuthError(e, {
        user_invalid_credentials: LoginStatus.INVALID_CREDENTIALS,
        user_blocked: LoginStatus.USER_BLOCKED,
        general_rate_limit_exceeded: LoginStatus.RATE_LIMIT_EXCEEDED,
      })
    }
  }

  /**
   * Authenticates the current session cookie with the backend.
   *
   * @returns A Promise that resolves to true if the session is valid, false otherwise.
   */
  async authenticate(): Promise<boolean> {
    try {
      await account.get()
      return true
    } catch (e) {
      if (e instanceof AppwriteException && e.type === 'general_rate_limit_exceeded') {
        return false
      }
      return false
    }
  }

  /**
   * Returns the current authenticated user.
   */
  async getCurrentUser(): Promise<Models.User<Models.Preferences> | null> {
    try {
      return await account.get()
    } catch {
      return null
    }
  }

  /**
   * Fetches full user details via backend function and ensures registration.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getUserDetails(): Promise<any | null> {
    try {
      const execution = await functions.createExecution({
        functionId: 'app-handler',
        xpath: '/users/me',
        method: ExecutionMethod.GET,
      })
      if (execution.status === 'completed') {
        try {
          const response = JSON.parse(execution.responseBody)
          return response.user || null
        } catch (e) {
          console.error('Failed to parse getUserDetails response', e)
          return null
        }
      }
      return null
    } catch {
      return null
    }
  }

  /**
   * Authenticates a user anonymously.
   *
   * @returns A Promise that resolves with the AuthResult.
   */
  async loginAnonymously(): Promise<AuthResult> {
    try {
      await account.createAnonymousSession()
      return { status: LoginStatus.OK }
    } catch (e) {
      return this.handleAuthError(e, {
        general_rate_limit_exceeded: LoginStatus.RATE_LIMIT_EXCEEDED,
      })
    }
  }

  /**
   * Logs out the current user by deleting the current session.
   */
  async logout(): Promise<boolean> {
    try {
      await account.deleteSession('current')
      return true
    } catch {
      return false
    }
  }

  /**
   * Fetches the rating history for the current user.
   */
  async getRatingHistory(userId: string): Promise<RatingRecord[]> {
    try {
      const response = await tablesDB.listRows<RatingRecord>({
        databaseId: 'tixo',
        tableId: 'rating',
        queries: [
          Query.equal('userId', userId),
          Query.orderAsc('$createdAt'),
          Query.limit(100)
        ]
      })
      return response.rows
    } catch (e) {
      console.error('Failed to fetch rating history', e)
      return []
    }
  }

  /**
   * Initiates Google OAuth2 login.
   */
  async loginWithGoogle(redirect?: string): Promise<void> {
    if (typeof window === 'undefined') return
    // Remove the hash (#) as Nuxt 3 uses History API instead of Hash mode
    // Paths like /dashboard are handled natively
    const successUrl = redirect ? `${window.location.origin}${redirect}` : `${window.location.origin}/`
    await account.createOAuth2Session(
      OAuthProvider.Google,
      successUrl,
      `${window.location.origin}/login`,
    )
  }
}

export const auth = new AuthService()
