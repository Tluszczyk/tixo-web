import { account, functions } from '@/api/appwriteClient'
import { HandleAppwriteErrors } from './utils/decorators'
import { ExecutionMethod, type Models, OAuthProvider, AppwriteException } from 'appwrite'

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
  @HandleAppwriteErrors(
    {
      general_rate_limit_exceeded: false,
    },
    false,
  )
  async authenticate(): Promise<boolean> {
    await account.get()
    return true
  }

  /**
   * Returns the current authenticated user.
   */
  @HandleAppwriteErrors({}, null)
  async getCurrentUser(): Promise<Models.User<Models.Preferences> | null> {
    return await account.get()
  }

  /**
   * Fetches full user details via backend function.
   */
  @HandleAppwriteErrors({}, null)
  async getUserDetails(): Promise<string | null> {
    const execution = await functions.createExecution({
      functionId: 'app-handler',
      xpath: '/users/details',
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
  @HandleAppwriteErrors({}, false)
  async logout(): Promise<boolean> {
    await account.deleteSession('current')
    return true
  }

  /**
   * Initiates Google OAuth2 login.
   */
  async loginWithGoogle(): Promise<void> {
    await account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.location.origin}/`,
      `${window.location.origin}/login`,
    )
  }
}

export const auth = new AuthService()
