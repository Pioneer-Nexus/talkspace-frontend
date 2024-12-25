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
}

type Action = {
  updateChatConversations: (roomId: string) => void
  updateChatConversation: (message: Message) => void
}

export const useChatConversation = create<State & Action>((set) => ({
  roomId: '',
  messages: [],
  participants: [],
  updateChatConversations: (roomId: string) => {
    const data = messageData.filter((item: Message) => item.roomId === roomId)
    set((state) => ({ ...state, messages: data, roomId }))
  },
  updateChatConversation: (message: Message) => {
    set((state) => ({ ...state, messages: [message, ...state.messages] }))
  },
}))
