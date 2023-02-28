import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Chapters } from '~/config/story'
import { Chapter, Choice, Section } from '~/types/story'

// interface DefaultValues {
//   chapter: Chapter
//   sections: Section
//   currentChoices: Choice[]
//   activeEvent: string
//   storyChapterIndex: number
//   setActiveEvent: Dispatch<string>
//   setStoryChapterIndex: Dispatch<number>
// }

const ChapterContext = createContext<any>(undefined)

const ChapterProvider = ({ children }) => {
  const [activeEvent, setActiveEvent] = useState<string>('startChapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)
  const [chapter, setChapter] = useState<Chapter | undefined>()
  const [sections, setSections] = useState<Section>() || {}
  const [currentChoices, setCurrentChoices] = useState<Choice[]>()

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

  const currentChapterValues = {
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
