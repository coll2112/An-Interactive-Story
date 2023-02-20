import { FunctionComponent } from 'react'
import useGetChapter from '~/hooks/useGetChapter'
import Button from '~components/Base/Button'

import styles from './header.module.scss'

const Header: FunctionComponent = () => {
  const {
    activeEvent,
    storyChapterIndex,
    setStoryChapterIndex,
    setActiveEvent
  } = useGetChapter()

  const handleSaveGame = () => {
    localStorage.setItem('activeEvent', activeEvent)
    localStorage.setItem('storyChapterIndex', JSON.stringify(storyChapterIndex))
    console.log(activeEvent)
  }

  const handleLoadGame = () => {
    const savedActiveEvent = localStorage.getItem('activeEvent') as string
    const savedChapterIndex = Number(localStorage.getItem('storyChapterIndex'))
    setActiveEvent(savedActiveEvent)
    setStoryChapterIndex(savedChapterIndex)
  }

  return (
    <div className={styles.container}>
      <Button type="button" onClick={() => handleSaveGame()}>
        Save Game
      </Button>
      <Button type="button" onClick={() => handleLoadGame()}>
        Load Game
      </Button>
    </div>
  )
}

export default Header
