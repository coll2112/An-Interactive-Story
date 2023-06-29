import { useRouter } from 'next/router'
import { useChapterProvider } from '~/contexts/chapter'
import { useGameOptionsProvider } from '~/contexts/game-options'
import { Button } from '~components/Base/Button'
import { ChapterHeading } from '~components/ChapterHeading'

import styles from './titleScreen.module.scss'

export const TitleScreen = () => {
  const router = useRouter()
  const { handleLoadGame, setToggleOptionsOverlay } = useGameOptionsProvider()
  const { setActiveEvent, setStoryChapterIndex } = useChapterProvider()

  const navigateOnClick = (route: string, callbackFn?: VoidFunction): void => {
    void router.push(route)

    if (callbackFn) {
      callbackFn()
    }
  }

  const startNewGame: VoidFunction = () => {
    setActiveEvent('startChapter')
    setStoryChapterIndex(0)
  }

  return (
    <div className={styles['title-container']}>
      <video
        autoPlay
        loop
        muted
        className={styles['title-bg']}
        src="videos/blue-light-bg.mp4"
      />
      <ChapterHeading className={styles.title}>
        Choose Your Own Adventure
      </ChapterHeading>
      <div className={styles['menu-buttons']}>
        <Button onClick={() => navigateOnClick('/game', startNewGame)}>
          New Game
        </Button>
        <Button onClick={() => navigateOnClick('/game', handleLoadGame)}>
          Load Game
        </Button>
        <Button onClick={() => setToggleOptionsOverlay(true)}>Options</Button>
      </div>
    </div>
  )
}
