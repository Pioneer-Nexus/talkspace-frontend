import ClipIcon from '@/assets/images/svgs/clip.svg'
import SendIcon from '@/assets/images/svgs/send.svg'
import SmileIcon from '@/assets/images/svgs/smile.svg'

import { useCreateMessage } from '@/graphql/mutations/useCreateMessage'
import { useChatConversation } from '@/stores'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'

type Types = {
  message: string
  isDisabledButton: boolean
}
const defaultViewInput = { message: '', isDisabledButton: false }

export const ChatViewInput = () => {
  const [chatInput, setChatInput] = useState<Types>(defaultViewInput)
  const { roomId, updateMessage } = useChatConversation()
  const [dispatch, { data }] = useCreateMessage()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') setChatInput({ message: '', isDisabledButton: true })
    else setChatInput({ message: e.target.value, isDisabledButton: false })
  }

  const handleUserChat = () => {
    if (chatInput.message === '') return
    dispatch({ variables: { input: { roomId, content: chatInput.message } } })
    setChatInput(defaultViewInput)
  }
  useEffect(() => {
    setChatInput(defaultViewInput)
  }, [roomId])

  useEffect(() => {
    if (data?.createMessage) {
      updateMessage(data.createMessage)
    }
  }, [data])

  return (
    <div className='flex items-center gap-2 p-2'>
      <Input
        size='large'
        value={chatInput.message}
        onChange={handleChange}
        onEnter={handleUserChat}
        extra={
          <>
            <Button shape='circle' type='text' icon={<ClipIcon fontSize={18} />} />
            <Button shape='circle' type='text' icon={<SmileIcon fontSize={18} />} />
          </>
        }
      />
      <Button shape='circle' type='primary' disabled={chatInput.isDisabledButton} icon={<SendIcon />} onClick={handleUserChat} />
    </div>
  )
}
