import { ButtonIconPosition, ButtonSize, ButtonType } from '@/interfaces/components'
import clsx from 'clsx'
import { FC, PropsWithChildren, ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonProps extends PropsWithChildren {
  type?: ButtonType
  icon?: ReactNode
  size?: ButtonSize
  iconPosition?: ButtonIconPosition
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    type = ButtonType.DEFAULT,
    size = ButtonSize.DEFAULT,
    iconPosition = ButtonIconPosition.START,
    icon,
  } = props
  console.log(size, styles)
  return (
    <button
      className={clsx(
        'line flex items-center gap-2 rounded border px-[15px] py-[4px] text-[14px] leading-[22px] transition-colors duration-300',
        styles[`type-${type}`],
        styles[`icon-position-${iconPosition}`],
        styles[`size-${size}`],
        !children && styles['only-icon'],
      )}
    >
      {iconPosition && icon}
      {children}
    </button>
  )
}
