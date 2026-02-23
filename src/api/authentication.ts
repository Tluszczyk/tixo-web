import {account} from "@/api/appwriteClient";
import { HandleAppwriteErrors } from "./utils/decorators";
import type { Models } from "appwrite";

export enum LoginStatus {
  OK,
  INVALID_CREDENTIALS,
  UNKNOWN_ERROR
}

class AuthService {

  /**
   * Authenticates a user with the backend using email and password to obtain a cookie.
   *
   * @param email The user's email.
   * @param password The user's password.
   * @returns A Promise that resolves with the authentication cookie string, or rejects on failure.
   */
  @HandleAppwriteErrors({user_invalid_credentials: LoginStatus.INVALID_CREDENTIALS}, LoginStatus.UNKNOWN_ERROR)
  async login(
    email: string,
    password: string,
  ): Promise<LoginStatus> {
    await account.createEmailPasswordSession({
      email: email,
      password: password
    })

    return LoginStatus.OK;
  }

  /**
   * Authenticates the current session cookie with the backend.
   *
   * @returns A Promise that resolves to true if the session is valid, false otherwise.
   */
  @HandleAppwriteErrors({}, false)
  async authenticate(): Promise<boolean> {
    await account.get();
    return true;
  }

  /**
   * Returns the current authenticated user.
   */
  @HandleAppwriteErrors({}, null)
  async getCurrentUser(): Promise<Models.User<Models.Preferences> | null> {
    return await account.get();
  }
}

export const auth = new AuthService();
