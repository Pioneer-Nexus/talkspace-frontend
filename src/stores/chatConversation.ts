import { UserDto, UserRoomDto } from '@/graphql/graphql'
import messageData from '@/mock-data/messages.json'
import { create } from 'zustand'
export interface Message {
  id: string
  timestamp: string // or Date if you want to parse it as a Date object
  sender: string
  message: string
  roomId: string
  metadata: {
    read: boolean
    type: string // e.g., "text", "image", etc., you can use a union type if there are predefined values
  }
}

interface Participant {
  user_id: string
  name: string
  avatarLink?: string
}

type State = {
  roomId: string
  participants: Participant[]
  messages: Message[]
  users: UserDto[]
}

type ChatRoomParams = {
  roomId: string
  users: UserRoomDto[]
}

type Action = {
  updateChatConversation: (message: Message) => void
  updateChatConversations: (roomId: string) => void
  updateChatRoom: (input: ChatRoomParams) => void
}

export const useChatConversation = create<State & Action>((set) => ({
  roomId: '',
  users: [],
  messages: [],
  participants: [],
  updateChatConversations: (roomId: string) => {
    const data = messageData.filter((item: Message) => item.roomId === roomId)
    set((state) => ({ ...state, messages: data, roomId }))
  },
  updateChatConversation: (message: Message) => {
    set((state) => ({ ...state, messages: [message, ...state.messages] }))
  },
  updateChatRoom: ({ roomId, users }) => {
    set((state) => ({ ...state, roomId, users: users.map((user) => user.user) }))
  },
}))
