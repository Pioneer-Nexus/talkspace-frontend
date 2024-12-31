import { useQuery } from '@apollo/client'
import { PaginationOptionDto, Query } from '../graphql'
import { GET_USER_CHAT_ROOMS } from './getUserChatRooms'

export const useGetUserChatRoom = (paginationOption: PaginationOptionDto) => {
  const { data: _data, loading, error } = useQuery<Pick<Query, 'getUserChatRooms'>>(GET_USER_CHAT_ROOMS, { variables: { paginationOption } })
  const data = _data?.getUserChatRooms

  if (error) {
    console.error(error)
  }

  return { data, loading, error }
}
