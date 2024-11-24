import React from 'react'
import styles from './Profile.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Avatar, Button } from '@/components'
import PenIcon from '@/assets/images/svgs/pen.svg'

const Profile = () => {
  return (
        <div className={clsx(styles['profile-page'])}>
      <nav className={clsx(styles['navigation'])}>
        <Link className={clsx(styles['link'])} to={'/'}>
          Home
        </Link>
        <Link className={clsx(styles['link'])} to={'/'}>
          Home
        </Link>
        <Link className={clsx(styles['link'])} to={'/'}>
          Home
        </Link>
        <Link className={clsx(styles['link'])} to={'/'}>
          Home
        </Link>
        <Link className={clsx(styles['link'])} to={'/'}>
          Home
        </Link>
        <Link className={clsx(styles['link'])} to={'/'}>
          Home
        </Link>
        <Link className={clsx(styles['link'])} to={'/'}>
          Home
        </Link>
      </nav>
      <div className={clsx(styles['user-info'])}>
        <h1 className={clsx(styles['title'])}>Profile</h1>
        <div className={clsx(styles['card'])}>
          <Avatar style={{
            alignSelf: "center",
            marginRight: "8px"
          }} size={40} className={clsx(styles['avatar'])}>
            T
          </Avatar>
          <div className={clsx(styles['card-content'])}>
            <p className={clsx(styles['user-name'])}>Tùng</p>
            <p className={clsx(styles['job-position'])}>CEO</p>
            <p className={clsx(styles['user-place'])}>HCM</p>
          </div>
          <Button icon={<PenIcon/>} className={clsx(styles['edit-btn'])}>Edit</Button>
        </div>
        <div className={clsx(styles['card'])}>
          <div className={clsx(styles['card-content'])}>
            <h2 className={clsx(styles['title-info'])}>Personal Information</h2>
            <div className={clsx(styles['info'])}>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
            </div>
          </div>
          <Button icon={<PenIcon/>}  className={clsx(styles['edit-btn'])}>Edit</Button>
        </div>
        <div className={clsx(styles['card'])}>
        <div className={clsx(styles['card-content'])}>
            <h2 className={clsx(styles['title-info'])}>Personal Information</h2>
            <div className={clsx(styles['info'])}>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
              <div className={clsx(styles['item-info'])}>
                <span className={clsx(styles['item-title'])}>Email</span>
                <span className={clsx(styles['item-content'])}>tung@gmail.com</span>
              </div>
            </div>
          </div>
          <Button icon={<PenIcon/>}  className={clsx(styles['edit-btn'])}>Edit</Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
