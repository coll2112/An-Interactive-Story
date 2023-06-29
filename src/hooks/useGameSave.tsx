import { useEffect, useState } from 'react'
import { useChapterProvider } from '~/contexts/chapter'

const useGameSave = () => {
  const {
    activeEvent,
    storyChapterIndex,
    setStoryChapterIndex,
    setActiveEvent
  } = useChapterProvider()

  const [saveData, setSaveData] = useState<{
    savedActiveEvent: string
    savedChapterIndex: number
  }>({ savedActiveEvent: 'startChapter', savedChapterIndex: 0 })

  const handleSaveGame = () => {
    localStorage.setItem('activeEvent', activeEvent)
    localStorage.setItem('storyChapterIndex', JSON.stringify(storyChapterIndex))
  }

  const handleLoadGame = () => {
    setActiveEvent(saveData?.savedActiveEvent as string)
    setStoryChapterIndex(saveData?.savedChapterIndex as number)
  }

  useEffect(() => {
    const savedActiveEvent = localStorage.getItem('activeEvent') as string
    const savedChapterIndex = Number(localStorage.getItem('storyChapterIndex'))

    setSaveData({
      savedActiveEvent,
      savedChapterIndex
    })
  }, [activeEvent, storyChapterIndex])

  return {
    saveData,
    handleLoadGame,
    handleSaveGame
  }
}

export default useGameSave
