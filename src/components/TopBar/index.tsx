import { useGameOptionsProvider } from '~/contexts/game-options'
import { Button } from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'
import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './topBar.module.scss'

interface Props {
  chapterHeading: string
}

const TopBar = ({ chapterHeading }: Props) => {
  const { setToggleOptionsOverlay, toggleOptionsOverlay } =
    useGameOptionsProvider()

  const handleOptionsOverlay = (): void => {
    setToggleOptionsOverlay(!toggleOptionsOverlay)
  }

  return (
    <div className={styles.container}>
      <ChapterHeading>{chapterHeading}</ChapterHeading>
      <div className={styles['container-buttons']}>
        <Button type="button" onClick={handleOptionsOverlay}>
          <GiHamburgerMenu />
        </Button>
      </div>
    </div>
  )
}

export default TopBar
