import { useRouter } from 'next/router'
import { useChapterProvider } from '~/contexts/chapter'
import { useGameOptionsProvider } from '~/contexts/game-options'
import Button from '~components/Base/Button'

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
    <div>
      <h2>Title Here!</h2>
      <Button onClick={() => navigateOnClick('/game', startNewGame)}>
        New Game
      </Button>
      <Button onClick={() => navigateOnClick('/game', handleLoadGame)}>
        Load Game
      </Button>
      <Button onClick={() => setToggleOptionsOverlay(true)}>Options</Button>
    </div>
  )
}
