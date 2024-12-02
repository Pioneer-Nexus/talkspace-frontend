import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.css'

interface Props extends PropsWithChildren {
  count?: number
  overflowCount?: number
  size?: 'default' | 'small'
  showZero?: boolean
}

export const Badge: FC<Props> = (props) => {
  const { children, count, overflowCount, showZero = false, size = 'default' } = props

  const renderCount = () => {
    if (!overflowCount) return count
    if (!!count && count > overflowCount) return overflowCount + '+'
  }

  return (
    <div className={clsx(styles['badge'], styles[`size-${size}`])}>
      {(!!count || showZero) && (
        <sup className='absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-[9px] border-[1px] border-white bg-[#ff4d4f]'>
          <span>{renderCount()}</span>
        </sup>
      )}
      {children}
    </div>
  )
}
