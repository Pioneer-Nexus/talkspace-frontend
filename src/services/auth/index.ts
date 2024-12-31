import { User } from '@/graphql/graphql'
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
  private _id: User['_id']
  private email: User['email']
  private name: User['name']

  constructor() {
    const userString = localStorage.getItem(LOCAL_STORAGE.AUTH_INFORMATION)

    const user = userString ? (JSON.parse(userString) as Pick<User, '_id' | 'email' | 'name'>) : null
    this._id = user?._id || ''
    this.email = user?.email || ''
    this.name = user?.name || ''
  }

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

  public getAuth = (): Pick<User, '_id' | 'email' | 'name'> => {
    return {
      _id: this._id,
      email: this.email,
      name: this.name,
    }
  }

  private setAuth = (params: User): void => {
    this._id = params._id
    this.email = params.email
    this.name = params.name
    localStorage.setItem(LOCAL_STORAGE.AUTH_INFORMATION, JSON.stringify(params))
  }

  private clearAuth = () => {
    ;[LOCAL_STORAGE.ACCESS_TOKEN, LOCAL_STORAGE.AUTH_INFORMATION].forEach((param) => {
      localStorage.removeItem(param)
    })
  }

  public login(accessToken: string, user: User): SuccessReturn | FailReturn {
    try {
      this.setAccessToken(accessToken)
      this.setAuth(user)
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
      this.clearAuth()

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
