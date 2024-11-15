import { ChangeEvent, FC, useState } from 'react'
import styles from './Input.module.css'
import HidePassword from '@/assets/images/svgs/hide_pass.svg'
import ShowPassword from '@/assets/images/svgs/show_pass.svg'
import clsx from 'clsx'

type InputType = 'text' | 'number' | 'email' | 'password'
type Status = 'error' | 'warning' | 'success'
type Size = 'default' | 'large' | 'small'
interface InputProps {
  type?: InputType
  placeholder?: string
  errorMessage?: string
  status?: Status
  value?: string
  size?: Size
  style?: object
  icon?: JSX.Element
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props) => {
  const {
    type = 'text',
    placeholder = 'text',
    errorMessage = '',
    status = '',
    value = "",
    style,
    size = 'default',
    icon = <></>,
    disabled = false,
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
    <>
      <div style={style} className={clsx(
        styles['input__wrapper'], 
        styles[size], status ? styles[status] : '', 
        disabled && styles['disabled']
        )}>
        {icon}
        <input
          {...commonProps}
        />
        <div onClick={handleShowNHidePassword}>{renderIconHideNShowPassword()}</div>
      </div>
      <p className={styles['error-msg']}>{errorMessage ? errorMessage : ''}</p>
    </>
  )
}
