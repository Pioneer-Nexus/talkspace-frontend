import { Button } from '@/components'
import AccountSetting from '@/pages/profile/account-setting/AccountSetting'
import MyAccount from '@/pages/profile/my-account/MyAccount'
import clsx from 'clsx'
import { useState } from 'react'
import styles from './Profile.module.css'

type Tab = 'account' | 'setting'

const ProfilePage = () => {
  const [tab, setTab] = useState<Tab>('account')

  const handleSwitchTab = (tab: Tab) => {
    setTab(tab)
  }
  return (
    <div className={clsx(styles['layout'])}>
      <div className={clsx(styles['container'])}>
        <nav className={clsx(styles['tab-navigate'])}>
          <Button onClick={() => handleSwitchTab('account')} className={clsx(styles['navigate'], tab === 'account' && styles['tab-active'])}>
            My Profile
          </Button>
          <Button onClick={() => handleSwitchTab('setting')} className={clsx(styles['navigate'], tab === 'setting' && styles['tab-active'])}>
            Account Setting
          </Button>
        </nav>
        <div className={clsx(styles['tab-content'])}>
          {tab === 'account' && <MyAccount />}
          {tab === 'setting' && <AccountSetting />}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
