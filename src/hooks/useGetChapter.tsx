import { useEffect, useMemo, useState } from 'react'
import { StoryTree } from '~/config/story'
import { Chapter, Choice, Section } from '~/types/story'

const useGetChapter = () => {
  const [activeEvent, setActiveEvent] = useState<string>('startChapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)
  const [chapter, setChapter] = useState<Chapter | undefined>()
  const [sections, setSections] = useState<Section>() || {}
  const [currentChoices, setCurrentChoices] = useState<Choice[]>()

  useEffect(() => {
    let isSubscribed = true

    if (isSubscribed) {
      const newChapterObj = {} as Chapter
      const currentChapter = StoryTree.find(
        (c) => c.chapterIndex === storyChapterIndex
      )

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
    const choices = sections?.[activeEvent]?.choices?.filter(
      (c) => c.dependency !== false
    )

    setCurrentChoices(choices)
    setActiveEvent(activeEvent)
  }, [chapter, sections, activeEvent])

  return {
    chapter,
    sections,
    currentChoices,
    activeEvent,
    storyChapterIndex,
    setActiveEvent,
    setStoryChapterIndex
  }
}

export default useGetChapter
