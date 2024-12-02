import { Avatar, Badge } from '@/components'
import { FC } from 'react'
import styles from './styles.module.css'

export const BadgeTestPage: FC = () => {
  return (
    <>
      <div className={styles['wrapper']}>
        <h4>Basic</h4>
        <div>
          <Badge>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={0}>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={2}>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={15}>
            <Avatar size={40} />
          </Badge>
          <Badge count={876}>
            <Avatar size={40} />
          </Badge>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Size</h4>
        <div>
          <Badge count={15}>
            <Avatar shape='square' size={40} />
          </Badge>
          <Badge count={4} size='small'>
            <Avatar shape='square' size={40} />
          </Badge>
          <Badge count={15} size='small'>
            <Avatar shape='square' size={40} />
          </Badge>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Show zero</h4>
        <div>
          <Badge>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={0} showZero>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={2}>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={15}>
            <Avatar size={40} />
          </Badge>
          <Badge count={876}>
            <Avatar size={40} />
          </Badge>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Overflow count</h4>
        <div>
          <Badge>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={20}>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge count={10} overflowCount={9}>
            <Avatar size={40} />
          </Badge>
          <Badge count={1000}>
            <Avatar size={40} />
          </Badge>
          <Badge count={1000} overflowCount={999}>
            <Avatar size={40} />
          </Badge>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Dot</h4>
        <div>
          <Badge count={7}>
            <Avatar size={40} shape='square' />
          </Badge>
          <Badge dot>
            <Avatar size={40} shape='square' />
          </Badge>
        </div>
      </div>
    </>
  )
}
