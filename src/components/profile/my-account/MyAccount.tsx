
import clsx from 'clsx'
import styles from './MyAccount.module.css'
import { Avatar } from '@/components/avatar'
import { Input } from '@/components/input'
import { Card } from '../card/Card'
import { useEffect, useState } from 'react'
import Profile from '@/services/apis/profile/types/Profile'
import { getProfileService } from '@/services/apis/profile/profile'


const MyAccount = () => {
  const [myProfile, setMyProfile] = useState<Profile>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
    home_address: '',
    country: '',
    birthday: ""
  })

  const fetchProfile = async () => {
    const profile: Profile = await getProfileService()
    setMyProfile(profile)
  }

  const renderInfo = (myProfile: Profile) => {
    const html = (
      <>
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
          <div className={clsx(styles['info-basic'])}>
            <p className={clsx(styles['fullname'])}>{myProfile.first_name} {myProfile.last_name}</p>
            <p className={clsx(styles['birthday'])}>{myProfile.birthday}</p>
          </div>
        </Card>

        <Card className={clsx(styles['card-info'])}>
          <div>
            <h3 className={clsx(styles['title-info'])}>Personal Information</h3>
            <div className={clsx('mt-[12px] grid grid-cols-[repeat(2,300px)] gap-y-[12px]')}>
              <Input
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                size='small'
                title='First Name'
                titlePosition='top'
                readonly={true}
                value={myProfile.first_name}
              />
              <Input
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                size='small'
                title='Last Name'
                titlePosition='top'
                readonly={true}
                value= {myProfile.last_name}
              />
              <Input
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                size='small'
                title='Email'
                titlePosition='top'
                readonly={true}
                value={myProfile.email}
              />
              <Input
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                size='small'
                title='Phone'
                titlePosition='top'
                readonly={true}
                value={myProfile.phone}
              />
            </div>
          </div>
        </Card>
        <Card className={clsx(styles['card-info'])}>
          <div>
            <h3 className={clsx(styles['title-info'])}>Address</h3>
            <div className={clsx('mt-[12px] grid grid-cols-[repeat(2,300px)] gap-y-[12px]')}>
              <Input
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                size='small'
                title='Country'
                titlePosition='top'
                readonly={true}
                value={myProfile.country}
              />
              <Input
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                size='small'
                title='City'
                titlePosition='top'
                readonly={true}
                value={myProfile.city}
              />
              <Input
                titleStyle={{
                  color: '#9e9e9e',
                  marginBottom: '4px',
                }}
                size='small'
                title='Street'
                titlePosition='top'
                readonly={true}
                value={myProfile.home_address}
              />
            </div>
          </div>
        </Card>
      </>
    )

    return html
  }

  useEffect(() => {
    fetchProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={clsx(styles['container'], "h-full")}>
      <h2 className={clsx(styles['title'])}>My Profile</h2>
      <div className={clsx("overflow-y-auto h-full")}>
        {renderInfo(myProfile)}
      </div>
    </div>
  )
}

export default MyAccount

