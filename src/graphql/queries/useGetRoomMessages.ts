import { useQuery } from '@apollo/client'
import { PaginationOptionDto, Query } from '../graphql'
import { GET_ROOM_MESSAGES } from './getRoomMessages'

type TParams = {
  paginationOptionInput: PaginationOptionDto
  roomIdInput: string
}

export const useGetRoomMessages = (input: TParams) => {
  const { data: _data, loading, error } = useQuery<Pick<Query, 'getRoomMessages'>>(GET_ROOM_MESSAGES, { variables: input })
  const data = _data?.getRoomMessages

  if (error) {
    console.error(error)
  }

  return { data, loading, error }
}
