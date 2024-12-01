import clsx from 'clsx'
// import { useEffect, useState } from 'react'
import styles from './AccountSetting.module.css'
import { Input } from '@/components/input'
import { Card } from '../card/Card'
import { Button } from '@/components/button'
import { ChangeEvent, useEffect, useState } from 'react'
import Profile from '@/services/apis/profile/types/Profile'
import { getProfileService, updatePassword, updateProfile } from '@/services/apis/profile/profile'
import { isEmptyInput, validatedEmail, validatePhoneNumber, validPassword } from '@/utils'
import StatusInput from '@/@types/status-input'

const stylesInputPassword = {
  minWidth: '300px',
}

const stylesInputInfo = {
  minWidth: '200px',
  maxWidth: '500px',
}

type ChangePassword = {
  currentPassword: string
  newPassword: string
}

type ValidateFormProfile = {
  first_name: {
    status: StatusInput
    message: string
  }
  last_name: {
    status: StatusInput
    message: string
  }
  email: {
    status: StatusInput
    message: string
  }
  phone: {
    status: StatusInput
    message: string
  }
  city: {
    status: StatusInput
    message: string
  }
  home_address: {
    status: StatusInput
    message: string
  }
  country: {
    status: StatusInput
    message: string
  }
  birthday: {
    status: StatusInput
    message: string
  }
}

type ValidateChangePassword = {
  currentPassword: {
    status: StatusInput
    message: string
  }
  newPassword: {
    status: StatusInput
    message: string
  }
}

const AccountSetting = () => {
  const [profile, setProfile] = useState<Profile>({
    first_name: 'Phạm',
    last_name: 'Thanh Tùng',
    email: 'phamthanhtung12.work@gmail.com',
    phone: '123456789',
    city: 'Hồ Chí Minh',
    home_address: '14 street 5',
    country: 'Bình Thuận',
    birthday: '12/04/2000',
    password: '12345678',
  })

  const [validateInputProfile, setValidateInputProfile] = useState<ValidateFormProfile>({
    first_name: {
      status: 'info',
      message: '',
    },
    last_name: {
      status: 'info',
      message: '',
    },
    phone: {
      status: 'info',
      message: '',
    },
    email: {
      status: 'info',
      message: '',
    },
    city: {
      status: 'info',
      message: '',
    },
    home_address: {
      status: 'info',
      message: '',
    },
    country: {
      status: 'info',
      message: '',
    },
    birthday: {
      status: 'info',
      message: '',
    },
  })

  const [changePassword, setChangePassword] = useState<ChangePassword>({
    currentPassword: '',
    newPassword: '',
  })

  const [validateChangePassword, setValidateChangePassword] = useState<ValidateChangePassword>({
    currentPassword: {
      status: 'default',
      message: '',
    },
    newPassword: {
      status: 'default',
      message: '',
    },
  })

  const getProfile = async () => {
    const profileData = await getProfileService()
    setProfile(profileData)
  }

  const validateFormProfile = () => {
    const validateInput: ValidateFormProfile = {
      first_name: {
        status: 'info',
        message: '',
      },
      last_name: {
        status: 'info',
        message: '',
      },
      email: {
        status: 'info',
        message: '',
      },
      phone: {
        status: 'info',
        message: '',
      },
      city: {
        status: 'info',
        message: '',
      },
      home_address: {
        status: 'info',
        message: '',
      },
      country: {
        status: 'info',
        message: '',
      },
      birthday: {
        status: 'info',
        message: '',
      },
    }
    const isValidFirstName = isEmptyInput(profile.first_name)
    const isValidLastName = isEmptyInput(profile.last_name)
    const isValidEmail = validatedEmail(profile.email)
    const isValidPhone = validatePhoneNumber(profile.phone)
    const isValidCity = isEmptyInput(profile.city)
    const isValidCounty = isEmptyInput(profile.country)
    const isValidHomeAddress = isEmptyInput(profile.home_address)
    const isValidBirthday = isEmptyInput(profile.birthday)
    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPhone &&
      isValidCity &&
      isValidCounty &&
      isValidHomeAddress &&
      isValidBirthday
    ) {
      return true
    }
    if (!isValidFirstName) {
      validateInput.first_name = {
        status: 'error',
        message: '* Please enter first name!',
      }
    }
    if (!isValidLastName) {
      validateInput.last_name = {
        status: 'error',
        message: '* Please enter last name!',
      }
    }
    if (!isValidEmail) {
      validateInput.email = {
        status: 'error',
        message: '* Wrong format!',
      }
    }
    if (!isValidPhone) {
      validateInput.phone = {
        status: 'error',
        message: '* Phone number at least 10 number!',
      }
    }
    if (!isValidCounty) {
      validateInput.first_name = {
        status: 'error',
        message: '* Please enter country!',
      }
    }
    if (!isValidBirthday) {
      validateInput.first_name = {
        status: 'error',
        message: '* Please enter you birthday!',
      }
    }
    if (!isValidHomeAddress) {
      validateInput.first_name = {
        status: 'error',
        message: '* Please enter you address!',
      }
    }

    setValidateInputProfile(validateInput)
    return false
  }

  const handleOnChangeInput = (field: string = 'first_name', event: ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value
    switch (field) {
      case 'first_name':
        setProfile({
          ...profile,
          first_name: valueInput,
        })
        break
      case 'last_name':
        setProfile({
          ...profile,
          last_name: valueInput,
        })
        break
      case 'email':
        setProfile({
          ...profile,
          email: valueInput,
        })
        break
      case 'phone':
        setProfile({
          ...profile,
          phone: valueInput,
        })
        break
      case 'city':
        setProfile({
          ...profile,
          city: valueInput,
        })
        break
      case 'home_address':
        setProfile({
          ...profile,
          home_address: valueInput,
        })
        break
        break
      case 'country':
        setProfile({
          ...profile,
          country: valueInput,
        })
        break
      default:
        break
    }
  }

  const handleUpdateProfile = async () => {
    const isValidForm = validateFormProfile()
    if (isValidForm) {
      const response = await updateProfile(profile)
      if (response.statusCode === 200) {
        setValidateInputProfile({
          first_name: {
            status: 'info',
            message: '',
          },
          last_name: {
            status: 'info',
            message: '',
          },
          phone: {
            status: 'info',
            message: '',
          },
          email: {
            status: 'info',
            message: '',
          },
          city: {
            status: 'info',
            message: '',
          },
          home_address: {
            status: 'info',
            message: '',
          },
          country: {
            status: 'info',
            message: '',
          },
          birthday: {
            status: 'info',
            message: '',
          },
        })
      }
    }
  }

  const validatePassword = () => {
    const validateInputChangePassword: ValidateChangePassword = {
      currentPassword: {
        status: 'default',
        message: '',
      },
      newPassword: {
        status: 'default',
        message: '',
      },
    }
    const isValidCurrentPassword = changePassword.currentPassword === profile.password
    const isValidNewPassword = validPassword(changePassword.newPassword)
    if (isValidCurrentPassword && isValidCurrentPassword) {
      setValidateChangePassword({
        currentPassword: {
          status: 'default',
          message: '',
        },
        newPassword: {
          status: 'default',
          message: '',
        },
      })
      return true
    }
    if (!isValidCurrentPassword) {
      validateInputChangePassword.currentPassword = {
        status: 'error',
        message: '* Wrong password!',
      }
    }
    if (!isValidNewPassword) {
      validateInputChangePassword.newPassword = {
        status: 'error',
        message: '* Current Password at least 8 character!',
      }
    }
    setValidateChangePassword(validateInputChangePassword)
    return false
  }

  const handleUpdatePassword = async () => {
    const isValidChangePassword = validatePassword()
    if (isValidChangePassword) {
      const response = await updatePassword(changePassword)
      if (response.statusCode === 200) {
        setChangePassword({
          newPassword: '',
          currentPassword: '',
        })
      }
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className={clsx(styles['container'], 'h-full')}>
      <h2 className={clsx(styles['title'])}>Account Setting</h2>
      <div className={clsx('h-full overflow-y-auto')}>
        <Card className={clsx(styles['card-info'])}>
          <div>
            <h3 className={clsx(styles['title-info'])}>Personal Information</h3>
            <div className={clsx('mt-[12px] flex flex-wrap gap-y-[12px]')}>
              <Input
                style={stylesInputInfo}
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                onChange={(e) => {
                  handleOnChangeInput('first_name', e)
                }}
                status={validateInputProfile.first_name.status}
                message={validateInputProfile.first_name.message}
                size='default'
                title='First Name'
                titlePosition='top'
                value={profile.first_name}
              />
              <Input
                style={stylesInputInfo}
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                onChange={(e) => {
                  handleOnChangeInput('last_name', e)
                }}
                status={validateInputProfile.last_name.status}
                message={validateInputProfile.last_name.message}
                size='default'
                title='Last Name'
                titlePosition='top'
                value={profile.last_name}
              />
              <Input
                style={stylesInputInfo}
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                onChange={(e) => {
                  handleOnChangeInput('email', e)
                }}
                status={validateInputProfile.email.status}
                message={validateInputProfile.email.message}
                size='default'
                title='Email'
                titlePosition='top'
                value={profile.email}
              />
              <Input
                style={stylesInputInfo}
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                onChange={(e) => {
                  handleOnChangeInput('phone', e)
                }}
                status={validateInputProfile.phone.status}
                message={validateInputProfile.phone.message}
                size='default'
                title='Phone'
                titlePosition='top'
                value={profile.phone}
              />
            </div>
            <Button onClick={handleUpdateProfile} className={clsx(styles['save-password-btn'])}>
              Save
            </Button>
          </div>
        </Card>
        <Card className={clsx(styles['card-info'])}>
          <div>
            <h3 className={clsx(styles['title-info'])}>Password</h3>
            <div className={clsx('mt-[12px] flex gap-[12px] gap-y-[12px]')}>
              <Input
                style={stylesInputPassword}
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                onChange={(e) => {
                  setChangePassword({
                    ...changePassword,
                    newPassword: e.target.value,
                  })
                }}
                status={validateChangePassword.newPassword.status}
                message={validateChangePassword.newPassword.message}
                type='password'
                size='large'
                title='New Password'
                value={changePassword.newPassword}
              />
              <Input
                style={stylesInputPassword}
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                onChange={(e) => {
                  setChangePassword({
                    ...changePassword,
                    currentPassword: e.target.value,
                  })
                }}
                status={validateChangePassword.currentPassword.status}
                message={validateChangePassword.currentPassword.message}
                type='password'
                size='large'
                title='Current Password'
                value={changePassword.currentPassword}
              />
            </div>
            <Button onClick={handleUpdatePassword} className={clsx(styles['save-password-btn'])}>
              Save Password
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AccountSetting
