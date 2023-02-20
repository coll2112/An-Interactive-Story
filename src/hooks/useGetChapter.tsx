import { useMemo, useState } from 'react'
import { StoryTree } from '~/config/story'
import { Chapter, Choice, Section } from '~/types/story'

const useGetChapter = (storyChapterIndex: number, activeEvent: string) => {
  const [chapter, setChapter] = useState<Chapter | undefined>()
  const [sections, setSections] = useState<Section>()

  useMemo(() => {
    const currentChapter = StoryTree.find(
      (c) => c.chapterIndex === storyChapterIndex
    )

    setChapter(currentChapter)
  }, [storyChapterIndex])

  useMemo(() => {
    setSections(chapter?.sections)
  }, [chapter])

  const currentChoices = useMemo(
    (): Choice[] | undefined =>
      sections?.[activeEvent]?.choices?.filter((c) => c.dependency !== false),
    [chapter, sections?.[activeEvent]?.choices]
  )

  return { chapter, sections, currentChoices }
}

export default useGetChapter
