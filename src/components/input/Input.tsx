import EyeIcon from '@/assets/images/svgs/eye.svg'
import EyeOffIcon from '@/assets/images/svgs/eye_off.svg'
import clsx from 'clsx'
import { ChangeEvent, CSSProperties, FC, useState } from 'react'
import styles from './Input.module.css'

type InputType = 'text' | 'number' | 'email' | 'password'
export type StatusInput = 'info' | 'error' | 'warning' | 'success' | 'default'
type SizeInput = 'default' | 'large' | 'small'
type TitlePosition = 'top' | 'left'
interface Props {
  type?: InputType
  placeholder?: string
  message?: string
  status?: StatusInput
  value?: string
  size?: SizeInput
  style?: CSSProperties
  icon?: JSX.Element
  disabled?: boolean
  titlePosition?: TitlePosition
  title?: string
  titleStyle?: CSSProperties
  readonly?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void
  extra?: JSX.Element
}

export const Input: FC<Props> = (props) => {
  const {
    disabled = false,
    icon,
    message = '',
    placeholder = '',
    size = 'default',
    status,
    style,
    title = '',
    type = 'text',
    value = '',
    titlePosition = 'top',
    titleStyle,
    readonly = false,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    extra,
  } = props

  const [inputType, setInputType] = useState<InputType>(type)

  const commonProps = {
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
      className={clsx(
        styles['input'],
        status && styles[`status-${status}`],
        title && styles[`position-${titlePosition}`],
        styles[`size-${size}`],
        disabled && styles['disabled'],
        readonly && styles['readonly']
      )}
    >
      {title && (
        <div style={titleStyle} className={clsx(styles['title'])}>
          {title}
        </div>
      )}
      <div className={clsx(styles['wrapper'])}>
        {icon && icon}
        {readonly ? <span className={clsx(styles['value-readonly'])}>{value}</span> : <input {...commonProps} />}
        {type === 'password' && (
          <div onClick={showHidePassword}>{inputType === 'password' ? <EyeOffIcon fontSize='20' /> : <EyeIcon fontSize='20' />}</div>
        )}
        {extra && extra}
      </div>
      {message && <p className={clsx(styles['msg'])}>{message}</p>}
    </div>
  )
}
