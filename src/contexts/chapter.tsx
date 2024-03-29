import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Chapters } from '~/config/story'
import { ChapterContextValues } from '~/types/context'
import { Chapter, Choice, Section } from '~/types/story'

const defaultContextValues: ChapterContextValues = {
  chapter: undefined,
  sections: undefined,
  currentChoices: undefined,
  activeEvent: '',
  storyChapterIndex: 0,
  setActiveEvent: () => null,
  setStoryChapterIndex: () => null
}

const ChapterContext = createContext<ChapterContextValues>(defaultContextValues)

const ChapterProvider = ({ children }) => {
  const [activeEvent, setActiveEvent] = useState<string>('startChapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)
  const [chapter, setChapter] = useState<Chapter | undefined>()
  const [sections, setSections] = useState<Section>() || {}
  const [currentChoices, setCurrentChoices] = useState<Choice[]>()

  // Checks for a new chapters and subscribes to the changes
  useEffect(() => {
    let isSubscribed = true

    if (isSubscribed) {
      const newChapterObj = {} as Chapter
      const currentChapter = Chapters.find((c) => c.index === storyChapterIndex)

      Object.assign(newChapterObj, currentChapter)
      setChapter(newChapterObj)
    }

    return () => {
      isSubscribed = false
    }
  }, [storyChapterIndex])

  useMemo(() => {
    setSections(chapter?.sections)
  }, [chapter])

  useMemo(() => {
    const choices = sections?.[activeEvent]?.choices

    setCurrentChoices(choices)
    setActiveEvent(activeEvent)
  }, [chapter, sections, activeEvent])

  const currentChapterValues: ChapterContextValues = {
    chapter,
    sections,
    currentChoices,
    activeEvent,
    storyChapterIndex,
    setActiveEvent,
    setStoryChapterIndex
  }

  return (
    <ChapterContext.Provider value={currentChapterValues}>
      {children}
    </ChapterContext.Provider>
  )
}

export default ChapterProvider
export const useChapterProvider = () => useContext(ChapterContext)
