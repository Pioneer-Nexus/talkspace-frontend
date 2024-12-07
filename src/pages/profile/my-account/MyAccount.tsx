import { Avatar } from '@/components/avatar'
import { Input } from '@/components/input'
import Profile from '@/pages/profile/types/Profile'
import { getProfileService } from '@/services/apis/profile'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Card } from '../Card'
import styles from './MyAccount.module.css'

const defaultTitleStyle = {
  color: '#9e9e9e',
  marginBottom: '4px',
  fontSize: '13px',
}

const MyAccount = () => {
  const [myProfile, setMyProfile] = useState<Profile>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    homeAddress: '',
    country: '',
    birthday: '',
    password: '12345678',
  })

  const fetchProfile = async () => {
    const profile: Profile = await getProfileService()
    setMyProfile(profile)
  }

  useEffect(() => {
    fetchProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={clsx(styles['container'], 'h-full')}>
      <h2 className={clsx(clsx('text-[22px] font-medium'))}>My Profile</h2>
      <div className={clsx('h-full overflow-y-auto')}>
        <Card className={clsx(styles['card-info'])}>
          <Avatar
            style={{
              width: '48px',
              height: 'auto',
              fontSize: 32,
              color: '#fff',
            }}
            size={16}
          >
            T
          </Avatar>
          <div className={clsx('ms-[8px] flex flex-col justify-between')}>
            <p className={clsx('inline-block')}>
              {myProfile.firstName} {myProfile.lastName}
            </p>
            <p className={clsx('text-[14px] text-[#858585]')}>{myProfile.birthday}</p>
          </div>
        </Card>
        <Card className={clsx(styles['card-info'])}>
          <div>
            <h3 className={clsx(styles['title-info'])}>Personal Information</h3>
            <div className={clsx('mt-[12px] grid grid-cols-[repeat(2,300px)] gap-y-[12px]')}>
              <Input titleStyle={defaultTitleStyle} size='small' title='First Name' titlePosition='top' readonly={true} value={myProfile.firstName} />
              <Input titleStyle={defaultTitleStyle} size='small' title='Last Name' titlePosition='top' readonly={true} value={myProfile.lastName} />
              <Input titleStyle={defaultTitleStyle} size='small' title='Email' titlePosition='top' readonly={true} value={myProfile.email} />
              <Input titleStyle={defaultTitleStyle} size='small' title='Phone' titlePosition='top' readonly={true} value={myProfile.phone} />
            </div>
          </div>
        </Card>
        <Card className={clsx(styles['card-info'])}>
          <div>
            <h3 className={clsx(styles['title-info'])}>Address</h3>
            <div className={clsx('mt-[12px] grid grid-cols-[repeat(2,300px)] gap-y-[12px]')}>
              <Input titleStyle={defaultTitleStyle} size='small' title='Country' titlePosition='top' readonly={true} value={myProfile.country} />
              <Input titleStyle={defaultTitleStyle} size='small' title='City' titlePosition='top' readonly={true} value={myProfile.city} />
              <Input titleStyle={defaultTitleStyle} size='small' title='Street' titlePosition='top' readonly={true} value={myProfile.homeAddress} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MyAccount
