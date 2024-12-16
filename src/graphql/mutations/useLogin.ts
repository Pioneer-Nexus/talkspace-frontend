import { useMutation } from '@apollo/client'
import { LOGIN_WITH_CREDENTIAL } from './users'
export const useLogin = () => {
  const [addTodo, { data, loading, error }] = useMutation(LOGIN_WITH_CREDENTIAL, {
    variables: {
      type: 'placeholder',
      someOtherVariable: 1234,
    },
  })
  return { data, loading, error }
}
