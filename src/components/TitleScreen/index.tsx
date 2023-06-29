import { useRouter } from 'next/router'
import Button from '~components/Base/Button'

import styles from './titleScreen.module.scss'

const TitleScreen = () => {
  const router = useRouter()

  return (
    <div className={styles['title-screen-container']}>
      <h2>WARNING</h2>
      <p>
        This project is a work in progress. Bugs will be present, and certain
        features may not yet work. If you're cool with this, then click the
        button below and start your adventure.
      </p>
      <Button
        onClick={() => {
          void router.push('/title-screen')
        }}
      >
        Confirm & Continue
      </Button>
    </div>
  )
}

export default TitleScreen
