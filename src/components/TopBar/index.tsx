import { Dispatch } from 'react'
import Button from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'

import styles from './topBar.module.scss'

interface Props {
  activeEvent: string
  storyChapterIndex: number
  chapterHeading: string
  setActiveEvent: Dispatch<string>
  setStoryChapterIndex: Dispatch<number>
}

const TopBar = ({
  activeEvent,
  storyChapterIndex,
  chapterHeading,
  setActiveEvent,
  setStoryChapterIndex
}: Props) => {
  const handleSaveGame = () => {
    localStorage.setItem('activeEvent', activeEvent)
    localStorage.setItem('storyChapterIndex', JSON.stringify(storyChapterIndex))
  }

  const handleLoadGame = () => {
    const savedActiveEvent = localStorage.getItem('activeEvent') as string
    const savedChapterIndex = Number(localStorage.getItem('storyChapterIndex'))
    setActiveEvent(savedActiveEvent)
    setStoryChapterIndex(savedChapterIndex)
  }

  return (
    <div className={styles.container}>
      <ChapterHeading chapterHeading={chapterHeading} />
      <div className={styles['container-buttons']}>
        <Button type="button" onClick={() => handleSaveGame()}>
          Save Game
        </Button>
        <Button type="button" onClick={() => handleLoadGame()}>
          Load Game
        </Button>
      </div>
    </div>
  )
}

export default TopBar
