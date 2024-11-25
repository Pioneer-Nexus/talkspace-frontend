import SendIcon from '@/assets/images/svgs/send.svg'
import SmileIcon from '@/assets/images/svgs/smile.svg'
import UploadIcon from '@/assets/images/svgs/upload.svg'

import { Button } from '../button'
import { Input } from '../input'

export const ChatViewInput = () => {
  return (
    <div className='flex items-center gap-2 p-2'>
      <Input
        size='large'
        extra={
          <>
            <Button shape='circle' type='text' icon={<UploadIcon />} />
            <Button shape='circle' type='text' icon={<SmileIcon />} />
          </>
        }
      />
      <Button shape='circle' type='primary' icon={<SendIcon />} />
    </div>
  )
}
