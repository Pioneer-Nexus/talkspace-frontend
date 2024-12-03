import SearchIcon from '@/assets/images/svgs/search.svg'
import { Button } from '@/components'
import { APP_TITLE } from '@/utils'
import styles from './styles.module.css'

export const ButtonTestPage = () => {
  document.title = APP_TITLE.TEST_PAGE[2]
  return (
    <>
      <div className={styles['wrapper']}>
        <h4>Type</h4>
        <div>
          <Button>Text</Button>
          <Button type='primary'>Text</Button>
          <Button type='text'>Text</Button>
          <Button type='link'>Text</Button>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Having Icon, Icon Position</h4>
        <div>
          <Button>Text</Button>
          <Button icon={<SearchIcon />}>Text</Button>
          <Button iconPosition='end' icon={<SearchIcon />}>
            Text
          </Button>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Size</h4>
        <div>
          <Button size='large'>Text</Button>
          <Button>Text</Button>
          <Button size='small'>Text</Button>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Disabled</h4>
        <div>
          <Button disabled>Text</Button>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Loading</h4>
        <div>
          <Button>Text</Button>
          <Button loading>Text</Button>
          {'|'}
          <Button icon={<SearchIcon />}>Text</Button>
          <Button icon={<SearchIcon />} loading>
            Text
          </Button>
          {'|'}
          <Button icon={<SearchIcon />} />
          <Button icon={<SearchIcon />} loading />
          {'|'}
          <Button type='primary'>Text</Button>
          <Button type='primary' loading>
            Text
          </Button>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Shape</h4>
        <div>
          <Button icon={<SearchIcon />} />
          <Button icon={<SearchIcon />} shape='round' />
          <Button icon={<SearchIcon />} shape='circle' />

          <Button size='small' icon={<SearchIcon />} />
          <Button size='small' icon={<SearchIcon />} shape='round' />
          <Button size='small' icon={<SearchIcon />} shape='circle' />

          <Button size='large' icon={<SearchIcon />} />
          <Button size='large' icon={<SearchIcon />} shape='round' />
          <Button size='large' icon={<SearchIcon />} shape='circle' />
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Link</h4>
        <div>
          <Button href='https://www.google.com/'>Google</Button>
          <Button href='/sign-in'>Sign in</Button>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h4>Block</h4>
        <div className='space-y-2' style={{ display: 'block' }}>
          <Button block type='primary'>
            Text
          </Button>
          <Button block>Text</Button>
        </div>
      </div>
    </>
  )
}
