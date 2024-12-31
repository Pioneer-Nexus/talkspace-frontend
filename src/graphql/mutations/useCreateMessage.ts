import { MutationHookOptions, useMutation } from '@apollo/client'
import { CREATE_MESSAGE, CreateMessageResults, CreateMessageVariables } from './createMessage'

export const useCreateMessage = (options?: MutationHookOptions<CreateMessageResults, CreateMessageVariables>) => {
  return useMutation<CreateMessageResults, CreateMessageVariables>(CREATE_MESSAGE, { ...options })
}
