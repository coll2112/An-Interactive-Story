import { useGameOptionsProvider } from '~/contexts/game-options'
import useGameSave from '~/hooks/useGameSave'
import Button from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'

import styles from './topBar.module.scss'

interface Props {
  chapterHeading: string
}

const TopBar = ({ chapterHeading }: Props) => {
  const { saveData, handleSaveGame, handleLoadGame } = useGameSave()
  const { setToggleOptionsOverlay, toggleOptionsOverlay } =
    useGameOptionsProvider()

  const handleOptionsOverlay = (): void => {
    setToggleOptionsOverlay(!toggleOptionsOverlay)
  }

  return (
    <div className={styles.container}>
      <ChapterHeading chapterHeading={chapterHeading} />
      <div className={styles['container-buttons']}>
        <Button type="button" onClick={handleSaveGame}>
          Save Game
        </Button>
        <Button
          disabled={saveData?.savedActiveEvent === null}
          type="button"
          onClick={handleLoadGame}
        >
          Load Game
        </Button>
        <Button type="button" onClick={handleOptionsOverlay}>
          Options
        </Button>
      </div>
    </div>
  )
}

export default TopBar
