import { Input } from '@/components'
import PasswordImage from '@/assets/images/svgs/passowrd_icon.svg'

import styles from './input.module.css'
import { ChangeEvent, useState } from 'react'
import { validatePhoneNumber } from '@/utils'

type Status = "" |'error' | 'warning' | 'success'

type TextInput = {
  value: string,
  status: Status,
  message: string,
  validate: boolean
}

const InputTest = () => {
  const [text, setText] = useState<TextInput>({
    value: "",
    status: "",
    message: "",
    validate: true
  })
  const [email, setEmail] = useState<TextInput>({
    value: "",
    status: "",
    message: "",
    validate: true
  })
  const [phoneNumber, setPhoneNumber] = useState<TextInput>({
    value: "",
    status: "",
    message: "",
    validate: true
  })
  const [password, setPassword] = useState<TextInput>({
    value: "",
    status: "",
    message: "",
    validate: true
  })

  const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace("  ", " ");
    if(value.startsWith(" ")) value.trim();
    if(value.length >= 8 || value.length === 0) {
      setPassword({
        ...password,
        status: "",
        message: "",
        value: value
      })
    } else {
      setPassword({
        ...password,
        status: "warning",
        message: "* Weak",
        value: value
      })
    }
  }

  const handleOnChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    let status: Status = "";
    let message: string = "";

    const value = event.target.value.replace("  ", " ");
    if(value.startsWith(" ")) value.trim();
    if(value.length === 0) {
      status = "";
      message = "";
      setPhoneNumber({
        ...phoneNumber,
        status: status,
        message: message,
        value: value
      })
      return
    }
    const isValidatePhoneNumber = validatePhoneNumber(value);
    if(isValidatePhoneNumber) {
        status = "";
        message = "";
    } else {
      status = "error";
      message = "* Phone number not validate";
    }
    setPhoneNumber({
      ...phoneNumber,
      status: status,
      message: message,
      value: value
    })
  }

  return (
    <>
      <div className={`${styles['wrapper']}`}>
        <h4>Default</h4>
        <div>
          <Input
            style={{
              width: '20%',
            }}
            placeholder={'Text'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Disabled</h4>
        <div>
          <Input
            style={{
              width: '20%',
            }}
            disabled={true}
            placeholder={'Disabled'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Icon</h4>
        <div>
          <Input
            icon={<PasswordImage className='h-3.5 w-auto' />}
            style={{
              width: '400px',
            }}
            placeholder={'Text'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Size</h4>
        <div>
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Large Size'}
            size='large'
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Default Size'}
            size='default'
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Small Size'}
            size='small'
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Status</h4>
        <div>
          <Input
            style={{
              width: '400px',
            }}
            status='warning'
            placeholder={'Warning'}
          />
          <Input
            style={{
              width: '400px',
            }}
            status='error'
            placeholder={'Error'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Width 100%</h4>
        <div>
          <Input
            placeholder={'Width 100%'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Title</h4>
        <div>
          <Input
            width='50%'
            title='title top'
            positionTitle='top'
            placeholder={'Title top'}
          />
          <Input
          width='50%'
            title='title left'
            positionTitle='left'
            placeholder={'Title top'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Type</h4>
        <div>
          <Input
            title='Text'
            positionTitle='top'
            type='text'
            width='50%'
          />
          <Input
            title='Email'
            positionTitle='top'
            type='email'
            width='50%'
            value='abc@gmail.com'
          />
          <Input
            title='Number'
            positionTitle='top'
            type='number'
            width='50%'
            value='0988486443'
          />
          <Input
            title='Password'
            positionTitle='top'
            type='password'
            value='12345678'
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>simulate</h4>
        <div>
          <Input
            title='Text'
            positionTitle='top'
            type='text'
            placeholder='Text'
            width='25%'
            value={text.value}
            onChange={(e) => {
              setText({
                ...text,
                value: e.target.value
              })
            }}
          />
          <Input
            title='Email'
            positionTitle='top'
            type='email'
            placeholder='Email'
            width='25%'
            value={email.value}
            onChange={(e) => {
              setEmail({
                ...email,
                value: e.target.value
              })
            }}
          />
          <Input
            title='Phone Number'
            positionTitle='top'
            type='number'
            placeholder='Phone Number'
            status={phoneNumber.status}
            message={phoneNumber.message}
            width='25%'
            value={phoneNumber.value}
            onChange={handleOnChangePhoneNumber}
          />
          <Input
            width='25%'
            title='Password'
            placeholder='Password'
            positionTitle='top'
            type='password'
            status={password.status}
            value={password.value}
            message={password.message}
            onChange={handleOnChangePassword}
          />
        </div>
      </div>
    </>
  )
}

export default InputTest
