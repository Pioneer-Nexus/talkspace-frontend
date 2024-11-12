import LoadingIcon from '@/assets/images/svgs/loading.svg'
import clsx from 'clsx'
import { FC, MouseEvent, PropsWithChildren, ReactNode } from 'react'
import styles from './styles.module.css'

type ButtonType = 'primary' | 'default' | 'text' | 'link'
type ButtonSize = 'small' | 'default' | 'large'
type ButtonIconPosition = 'start' | 'end'
type ButtonShape = 'default' | 'circle' | 'round'

interface ButtonProps extends PropsWithChildren {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  iconPosition?: ButtonIconPosition
  icon?: ReactNode
  href?: string
  disabled?: boolean
  loading?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    shape = 'default',
    type = 'default',
    size = 'default',
    iconPosition = 'start',
    icon,
    disabled,
    loading,
  } = props

  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 rounded border px-[15px] py-[4px] text-[14px] leading-[22px] transition-colors duration-300',
        styles[`type-${type}`],
        styles[`icon-position-${iconPosition}`],
        styles[`size-${size}`],
        !children && styles['only-icon'],
        disabled && styles['disabled'],
        loading && styles['loading'],
        styles[shape],
      )}
    >
      {loading && <LoadingIcon fill='white' />}
      {icon && icon}
      {children}
    </button>
  )
}
