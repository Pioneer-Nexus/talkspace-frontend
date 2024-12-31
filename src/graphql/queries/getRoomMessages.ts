import { gql } from '@apollo/client'
import { PaginationOptionDto, Query } from '../graphql'

export const GET_ROOM_MESSAGES = gql`
  query GetRoomMessages($paginationOptionInput: PaginationOptionDto!, $roomIdInput: String!) {
    getRoomMessages(paginationOptionInput: $paginationOptionInput, roomIdInput: $roomIdInput) {
      hasPrev
      page
      pageSize
      totalPage
      totalRecord
      data {
        _id
        content
        createdAt
        deletedAt
        isTagAll
        quoteMessageId
        roomId
        status
        tagUsers
        authorId
      }
      hasNext
    }
  }
`
export type GetRoomMessageVariables = {
  paginationOptionInput: PaginationOptionDto
  roomIdInput: string
}

export type GetRoomMessageResults = Pick<Query, 'getRoomMessages'>
