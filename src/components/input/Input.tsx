import EyeIcon from '@/assets/images/svgs/eye.svg'
import EyeOffIcon from '@/assets/images/svgs/eye_off.svg'
import clsx from 'clsx'
import { ChangeEvent, CSSProperties, forwardRef, KeyboardEvent, Ref, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
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
  readonly?: boolean
  register?: UseFormRegisterReturn
  label?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void
  onEnter?: () => void
  extra?: JSX.Element
}

const InputRef = (props: Props, ref: Ref<HTMLInputElement>) => {
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
    // value = '',
    titlePosition = 'top',
    titleStyle,
    readonly = false,
    register,
    onChange,
    onBlur,
    onFocus,
    onEnter = () => {},
    extra,
  } = props
  console.log(register, ref)
  const [inputType, setInputType] = useState<InputType>(type)

  const commonProps = {
    // value,
    type: inputType,
    placeholder,
    disabled,
    readOnly: readonly,
    onChange,
    onBlur,
    onFocus,
    ...register, // Spread the result of `register` directly into input props
  }

  const showHidePassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnter()
    }
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
        readonly && styles['readonly'],
      )}
    >
      {title && (
        <div style={titleStyle} className={clsx(styles['title'])}>
          {title}
        </div>
      )}
      <div className={clsx(styles['wrapper'])}>
        {icon && icon}
        <input {...commonProps} onKeyDown={handleKeyDown} ref={ref} />
        {type === 'password' && (
          <div onClick={showHidePassword}>{inputType === 'password' ? <EyeOffIcon fontSize='20' /> : <EyeIcon fontSize='20' />}</div>
        )}
        {extra && extra}
      </div>
      {message && <p className={clsx(styles['msg'])}>{message}</p>}
    </div>
  )
}

export const Input = forwardRef<HTMLInputElement, Props>(InputRef)
