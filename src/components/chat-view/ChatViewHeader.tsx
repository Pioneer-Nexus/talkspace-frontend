import SearchIcon from '@/assets/images/svgs/search.svg'
import { Avatar } from '../avatar'
import { Button } from '../button'

export const ChatViewHeader = () => {
  return (
    <div className='flex justify-between border-b-[1px] p-3'>
      <div className='flex gap-1'>
        <Avatar size={20}>N</Avatar>
        <div>Noah</div>
      </div>
      <div>
        <Button type='text' shape='circle' icon={<SearchIcon />} />
        <Button type='text' shape='circle' icon={<SearchIcon />} />
        <Button type='text' shape='circle' icon={<SearchIcon />} />
      </div>
    </div>
  )
}
