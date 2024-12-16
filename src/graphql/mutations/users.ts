import { gql } from '@apollo/client'

export const REGISTER_USER_WITH_CREDENTIAL = gql`
  mutation RegisterUserWithCredential($email: String!, $name: String!, $password: String!) {
    registerUserWithCredential($email: email, $name: name, $password: password) {
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
export const LOGIN_WITH_CREDENTIAL = gql`
  mutation LoginWithCredential($username: String!, $password: String!) {
    loginWithCredential(password: $username, username: $password) {
      _id
      accessToken
      authId
      authSecret
      createdAt
      expiredAt
      refreshToken
      type
      updatedAt
      username
    }
  }
`
