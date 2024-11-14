import ArchiveIcon from '@/assets/images/svgs/archive.svg'
import ChatIcon from '@/assets/images/svgs/chat.svg'
import LogoIcon2 from '@/assets/images/svgs/logo2.svg'
import LogoutIcon from '@/assets/images/svgs/logout.svg'
import UserIcon from '@/assets/images/svgs/user.svg'
import { FC } from 'react'
import { Avatar } from '../avatar'
import { Button } from '../button'

export const DashboardSidebar: FC = () => {
  return (
    <div className='flex h-screen w-20 flex-col items-center justify-between bg-gray-400 p-2'>
      <div className='items-middle flex flex-col items-center gap-4'>
        <Avatar size={40} src={<LogoIcon2 fill='#1560BD' />} />

        <hr className='h-[1px] w-full bg-black' />
        <Button type='text' iconPosition='top' icon={<ChatIcon fontSize='32' />} block size='small' className='!lending-[10px] !text-[10px]'>
          All chat
        </Button>
        <Button type='text' iconPosition='top' icon={<ArchiveIcon fontSize='32' />} block size='small' className='!lending-[10px] !text-[10px]'>
          Archive
        </Button>
      </div>
      <div className='flex flex-col space-y-1'>
        <Button type='text' icon={<UserIcon fontSize='24' />} shape='circle' size='large' />
        <Button type='text' icon={<LogoutIcon fontSize='24' />} shape='circle' size='large' />
      </div>
    </div>
  )
}
