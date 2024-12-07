import { gql } from '@apollo/client'

export const HELLO = gql`
  query Hello {
    hello {
      _id
      authId
      authSecret
      createdAt
      expiredAt
      type
      updatedAt
      username
    }
  }
`
