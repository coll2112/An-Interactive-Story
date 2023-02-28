import useGameSave from '~/hooks/useGameSave'
import Button from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'

import styles from './topBar.module.scss'

interface Props {
  chapterHeading: string
  chapterMusic: string
}

const TopBar = ({ chapterHeading, chapterMusic }: Props) => {
  const { saveData, handleSaveGame, handleLoadGame } = useGameSave()

  return (
    <div className={styles.container}>
      <ChapterHeading chapterHeading={chapterHeading} />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <audio autoPlay controls loop src={chapterMusic} /> */}
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
      </div>
    </div>
  )
}

export default TopBar
