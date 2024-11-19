import LogoIcon2 from '@/assets/images/svgs/logo2.svg'
import { Avatar } from '@/components'

export const AvatarTestPage = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-end space-x-2'>
        <Avatar size={24}>U</Avatar>
        <Avatar size={60} icon={<LogoIcon2 />} />
        <Avatar size={100} icon={<LogoIcon2 />} />
      </div>
      <div className='flex items-end space-x-2'>
        <Avatar shape='square' size={24} icon={<LogoIcon2 />} />
        <Avatar shape='square' size={60} icon={<LogoIcon2 />} />
        <Avatar shape='square' size={100} icon={<LogoIcon2 />} />
      </div>
      <div className='flex items-end space-x-2'>
        <Avatar size={20} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
        <Avatar size={40} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
        <Avatar size={60} src={<LogoIcon2 />} />
        <Avatar size={100} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
      </div>
      <div className='flex items-end space-x-2'>
        <Avatar shape='square' size={24}>
          N
        </Avatar>
        <Avatar shape='square' size={24}>
          N
        </Avatar>
        <Avatar shape='square' size={60}>
          Noah
        </Avatar>
        <Avatar shape='square' size={60}>
          Noah Phan
        </Avatar>
        <Avatar size={60}>Noah Phan</Avatar>
        <Avatar shape='square' size={100}>
          N
        </Avatar>
      </div>
    </div>
  )
}
