import ClipIcon from '@/assets/images/svgs/clip.svg'
import SendIcon from '@/assets/images/svgs/send.svg'
import SmileIcon from '@/assets/images/svgs/smile.svg'

import { useChatConversation } from '@/stores'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../button'
import { Input } from '../input'

export const ChatViewInput = () => {
  const [message, setMessage] = useState<string>('')
  const { updateChatConversation, roomId } = useChatConversation()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleUserChat = () => {
    updateChatConversation({
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      sender: 'user',
      message: message,
      roomId: roomId,
      metadata: {
        read: true,
        type: 'text',
      },
    })
    setMessage('')
  }
  return (
    <div className='flex items-center gap-2 p-2'>
      <Input
        size='large'
        value={message}
        onChange={handleChange}
        onEnter={handleUserChat}
        extra={
          <>
            <Button shape='circle' type='text' icon={<ClipIcon fontSize={18} />} />
            <Button shape='circle' type='text' icon={<SmileIcon fontSize={18} />} />
          </>
        }
      />
      <Button shape='circle' type='primary' icon={<SendIcon />} onClick={handleUserChat} />
    </div>
  )
}
