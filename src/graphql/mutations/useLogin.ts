import { useMutation } from '@apollo/client'
import { LOGIN_WITH_CREDENTIAL } from './users'

// type LoginVariables = {
//   email: string
//   password: string
// }

// type LoginHookResult = {
//   loginWithCredential: (variables: LoginVariables) => Promise<any>
//   data?: any
//   loading: boolean
//   error?: any
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLogin = () => {
  const [dispatch, { data, loading, error }] = useMutation(LOGIN_WITH_CREDENTIAL)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loginWithCredential = (params: any) => {
    return dispatch({ variables: params })
  }
  return { loginWithCredential, data, loading, error }
}
