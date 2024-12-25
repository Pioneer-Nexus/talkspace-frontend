import { gql } from '@apollo/client'

export const GET_USER_CHAT_ROOMS = gql`
  query GetUserChatRooms($paginationOption: PaginationOptionDto!) {
    getUserChatRooms(paginationOption: $paginationOption) {
      hasNext
      hasPrev
      page
      pageSize
      totalPage
      totalRecord
      data {
        _id
        createdAt
        deletedAt
        imageUrl
        name
        status
        type
        updatedAt
        userRooms {
          _id
          isNotify
          lastSeen
          muteUntil
          role
          user {
            _id
            createdAt
            email
            name
            updatedAt
          }
        }
      }
    }
  }
`
