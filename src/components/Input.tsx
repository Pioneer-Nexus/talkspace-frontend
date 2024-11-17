import { ChangeEvent, FC, useState } from 'react'
import styles from './Input.module.css'
import HidePassword from '@/assets/images/svgs/hide_pass.svg'
import ShowPassword from '@/assets/images/svgs/show_pass.svg'
import clsx from 'clsx'

type InputType = 'text' | 'number' | 'email' | 'password'
type Status = "" |'error' | 'warning' | 'success'
type Size = 'default' | 'large' | 'small'
type PositionTitle = "top" | "left"
interface InputProps {
  type?: InputType
  placeholder?: string
  message?: string
  status?: Status
  value?: string
  size?: Size
  style?: object
  icon?: JSX.Element
  disabled?: boolean
  width?: string
  positionTitle?: PositionTitle,
  title?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props) => {
  const {
    type = 'text',
    placeholder = 'text',
    message = '',
    status = '',
    value = '',
    style,
    size = 'default',
    icon = <></>,
    disabled = false,
    width = "100%",
    positionTitle = "top",
    title = "",
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
  } = props

  const [typeInput, setTypeInput] = useState<InputType>(type)

  const commonProps = {
    className: clsx(styles['input']),
    value: value,
    type: typeInput,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
  }
  const renderIconHideNShowPassword = () => {
    if (type === 'password') {
      return typeInput === 'password' ? <HidePassword className={`${styles['eye__icon']}`} /> : <ShowPassword className={`${styles['eye__icon']}`} />
    }
  }

  const handleShowNHidePassword = () => {
    setTypeInput(() => {
      return typeInput === 'password' ? 'text' : 'password'
    })
  }

  return (
    <section style={{
      width: width,
      ...style
    }}
      className={clsx(styles[positionTitle], status ? styles[status] : '')}
    >
      {title ? <span className={clsx(styles['title'])}>{title}</span> : <></>}
      <div className={clsx(styles['input__wrapper'], styles[size], disabled && styles['disabled'])}>
        {icon}
        <input {...commonProps} />
        <div onClick={handleShowNHidePassword}>{renderIconHideNShowPassword()}</div>
      </div>
      {
        message ? <p className={clsx(styles['msg'])}>{message}</p> : <></>
      }
    </section>
  )
}
