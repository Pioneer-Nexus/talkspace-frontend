import { OperationVariables, useMutation } from '@apollo/client'
import { Mutation } from '../graphql'
import { LOGIN_WITH_CREDENTIAL } from './users'

export const useUserLogin = <TParams extends OperationVariables>() => {
  const [dispatch, { data: _data, loading, error }] = useMutation<Pick<Mutation, 'loginWithCredential'>, TParams>(LOGIN_WITH_CREDENTIAL)
  const data = _data?.loginWithCredential
  const loginWithCredential = (params: TParams) => {
    return dispatch({ variables: params })
  }
  return { loginWithCredential, data, loading, error }
}
