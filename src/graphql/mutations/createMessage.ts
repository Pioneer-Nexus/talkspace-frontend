import { gql } from '@apollo/client'
import { CreateMessageInput, Mutation } from '../graphql'

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      _id
      authorId
      content
      createdAt
      deletedAt
      isTagAll
      quoteMessageId
      roomId
      status
      tagUsers
    }
  }
`

export type CreateMessageVariables = {
  input: CreateMessageInput
}

export type CreateMessageResults = Pick<Mutation, 'createMessage'>
