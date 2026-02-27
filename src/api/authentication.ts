import { account, functions } from '@/api/appwriteClient'
import { HandleAppwriteErrors } from './utils/decorators'
import { ExecutionMethod, type Models } from 'appwrite'

export enum LoginStatus {
  OK,
  INVALID_CREDENTIALS,
  UNKNOWN_ERROR,
}

class AuthService {
  /**
   * Authenticates a user with the backend using email and password to obtain a cookie.
   *
   * @param email The user's email.
   * @param password The user's password.
   * @returns A Promise that resolves with the authentication cookie string, or rejects on failure.
   */
  @HandleAppwriteErrors(
    { user_invalid_credentials: LoginStatus.INVALID_CREDENTIALS },
    LoginStatus.UNKNOWN_ERROR,
  )
  async login(email: string, password: string): Promise<LoginStatus> {
    await account.createEmailPasswordSession({
      email: email,
      password: password,
    })

    return LoginStatus.OK
  }

  /**
   * Authenticates the current session cookie with the backend.
   *
   * @returns A Promise that resolves to true if the session is valid, false otherwise.
   */
  @HandleAppwriteErrors({}, false)
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
      functionId: 'users-handler',
      xpath: '/details',
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
   * @returns A Promise that resolves with the LoginStatus.
   */
  @HandleAppwriteErrors({}, LoginStatus.UNKNOWN_ERROR)
  async loginAnonymously(): Promise<LoginStatus> {
    await account.createAnonymousSession()
    return LoginStatus.OK
  }

  /**
   * Logs out the current user by deleting the current session.
   */
  @HandleAppwriteErrors({}, false)
  async logout(): Promise<boolean> {
    await account.deleteSession('current')
    return true
  }
}

export const auth = new AuthService()
