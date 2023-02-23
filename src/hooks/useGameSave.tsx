import { Dispatch, useEffect, useState } from 'react'

const useGameSave = (
  activeEvent: string,
  storyChapterIndex: number,
  setActiveEvent: Dispatch<string>,
  setStoryChapterIndex: Dispatch<number>
) => {
  const [saveData, setSaveData] = useState<{
    savedActiveEvent: string
    savedChapterIndex: number
  }>()

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
