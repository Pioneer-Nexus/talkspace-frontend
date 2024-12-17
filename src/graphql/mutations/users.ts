import { gql } from '@apollo/client'

export const LOGIN_WITH_CREDENTIAL = gql`
  mutation LoginWithCredential($password: String!, $username: String!) {
    loginWithCredential(password: $password, username: $username) {
      _id
      accessToken
      authId
      authSecret
      createdAt
      deletedAt
      expiredAt
      refreshToken
      type
      updatedAt
      username
    }
  }
`
