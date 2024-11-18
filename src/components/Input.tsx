import EyeIcon from '@/assets/images/svgs/eye.svg'
import EyeOffIcon from '@/assets/images/svgs/eye_off.svg'
import clsx from 'clsx'
import { ChangeEvent, FC, useState } from 'react'
import styles from './Input.module.css'

type InputType = 'text' | 'number' | 'email' | 'password'
type StatusInput = 'info' | 'error' | 'warning' | 'success'
type SizeInput = 'default' | 'large' | 'small'
type TitlePosition = 'top' | 'left'
interface InputProps {
  type?: InputType
  placeholder?: string
  message?: string
  status?: StatusInput
  value?: string
  size?: SizeInput
  style?: object
  icon?: JSX.Element
  disabled?: boolean
  titlePosition?: TitlePosition
  title?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props) => {
  const {
    disabled = false,
    icon,
    message = '',
    placeholder = '',
    size = 'default',
    status = 'info',
    style,
    title = '',
    type = 'text',
    value = '',
    titlePosition = 'top',
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
  } = props

  const [inputType, setInputType] = useState<InputType>(type)

  const commonProps = {
    className: clsx(styles['input']),
    value: value,
    type: inputType,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
  }

  const showHidePassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  return (
    <div
      style={{ width: '100%', ...style }}
      className={clsx(styles['input'], styles[`status-${status}`], styles[`position-${titlePosition}`], styles[`size-${size}`])}
    >
      {title && <div className={clsx(styles['title'])}>{title}</div>}
      <div className={clsx(styles['wrapper'], disabled && styles['disabled'])}>
        {icon && icon}
        <input {...commonProps} />
        {type === 'password' && (
          <div onClick={showHidePassword}>{inputType === 'password' ? <EyeOffIcon fontSize='20' /> : <EyeIcon fontSize='20' />}</div>
        )}
      </div>
      {message && <p className={clsx(styles['msg'])}>{message}</p>}
    </div>
  )
}
