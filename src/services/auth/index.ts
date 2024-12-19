import { ERROR_CODE, LOCAL_STORAGE } from '@/utils'

type SuccessReturn = {
  success: boolean
  redirectTo: string
}

type ErrorType = {
  code: string
  message: string
  stacktrace: Error
}

type FailReturn = {
  errors: ErrorType
}

export class AuthService {
  private static _instance: AuthService

  public static get instance(): AuthService {
    if (!AuthService._instance) {
      this._instance = new AuthService()
    }
    return this._instance
  }

  public getAccessToken = (params: string) => {
    return localStorage.getItem(params)
  }

  private setAccessToken = (params: string): void => {
    localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, params)
  }

  private clearTokens = (params: string[]) => {
    params.forEach((param) => {
      localStorage.removeItem(param)
    })
  }

  public login(accessToken: string): SuccessReturn | FailReturn {
    try {
      this.setAccessToken(accessToken)

      return {
        success: true,
        redirectTo: '/',
      }
    } catch (error) {
      console.error(error)

      return {
        errors: {
          code: ERROR_CODE.LOGOUT_FAIL,
          message: "can't clear all tokens",
          stacktrace: error as unknown as Error,
        },
      }
    }
  }

  public logout(): SuccessReturn | FailReturn {
    localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN)
    try {
      this.clearTokens([LOCAL_STORAGE.ACCESS_TOKEN])

      return {
        success: true,
        redirectTo: '/',
      }
    } catch (error) {
      console.error(error)

      return {
        errors: {
          code: ERROR_CODE.LOGOUT_FAIL,
          message: "can't clear all tokens",
          stacktrace: error as unknown as Error,
        },
      }
    }
  }
}
