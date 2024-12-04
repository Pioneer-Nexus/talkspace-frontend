import clsx from 'clsx'
import styles from './Profile.module.css'
import { Button } from '@/components'
import { useState } from 'react'
import MyAccount from '@/pages/profile/my-account/MyAccount'
import AccountSetting from '@/pages/profile/account-setting/AccountSetting'

type Tabs = {
  account: boolean
  setting: boolean
}

const ProfilePage = () => {
  const [tabs, setTabs] = useState<Tabs>({
    account: true,
    setting: false,
  })

  const handleSwitchTabs = (tab: string) => {
    setTabs(() => {
      const newTabs = Object.assign(
        {
          account: false,
          setting: false,
        },
        { [tab]: true },
      )
      return newTabs
    })
  }
  return (
    <div className={clsx(styles['layout'])}>
      <div className={clsx(styles['container'])}>
        <nav className={clsx(styles['tabs-navigate'])}>
          <Button
            onClick={() => {
              handleSwitchTabs('account')
            }}
            className={clsx(styles['navigate'], styles[`tab-${tabs.account && 'active'}`])}
          >
            My Profile
          </Button>
          <Button
            onClick={() => {
              handleSwitchTabs('setting')
            }}
            className={clsx(styles['navigate'], styles[`tab-${tabs.setting && 'active'}`])}
          >
            Account Setting
          </Button>
        </nav>
        <div className={clsx(styles['tab-content'])}>
          {tabs.account && <MyAccount />}
          {tabs.setting && <AccountSetting />}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
