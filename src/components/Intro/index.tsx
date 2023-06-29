import { useRouter } from 'next/router'
import Button from '~components/Base/Button'

import styles from './intro.module.scss'

const Intro = () => {
  const router = useRouter()

  return (
    <div className={styles['intro-container']}>
      <h2>WARNING</h2>
      <p>
        This project is a work in progress. Bugs will be present, and certain
        features may not yet work. If you're cool with this, then click the
        button below and start your adventure.
      </p>
      <Button
        onClick={() => {
          void router.push('/title')
        }}
      >
        Confirm & Continue
      </Button>
    </div>
  )
}

export default Intro
