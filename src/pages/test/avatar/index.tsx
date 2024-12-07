import LogoIcon2 from '@/assets/images/svgs/logo2.svg'
import { Avatar } from '@/components'
import { APP_TITLE } from '@/utils'
import styles from './styles.module.css'

export const AvatarTestPage = () => {
  document.title = APP_TITLE.TEST_PAGE[3]

  return (
    <div className='space-y-4'>
      <div className={styles['wrapper']}>
        <h4>Size</h4>
        <div>
          <Avatar size={24}>U</Avatar>
          <Avatar size={60} icon={<LogoIcon2 />} />
          <Avatar size={100} icon={<LogoIcon2 />} />
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Shape</h4>
        <div>
          <Avatar size={60} icon={<LogoIcon2 />} />
          <Avatar shape='square' size={60} icon={<LogoIcon2 />} />
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Image, Icon</h4>
        <div>
          <Avatar size={20} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
          <Avatar size={40} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
          <Avatar size={60} src={<LogoIcon2 />} />
          <Avatar size={100} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Text</h4>
        <div>
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
    </div>
  )
}
