import clsx from 'clsx'
import { useCallback, useMemo, useState } from 'react'
import { StoryTree } from '~/config/story'
import { Chapter, Choice as ChoiceType } from '~/types/story'
import ChapterHeading from '~components/ChapterHeading'
import Choice from '~components/Choice'
import SectionText from '~components/SectionText'

import styles from './storyWizard.module.scss'

const StoryWizard = () => {
  const [storySection, setStorySection] = useState<string>('startChapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)
  const [chapter, setChapter] = useState<Chapter | undefined>()

  useMemo(() => {
    const currentChapter = StoryTree.find(
      (c) => c.chapterIndex === storyChapterIndex
    )

    setChapter(currentChapter)
  }, [storyChapterIndex])

  const choices = useMemo(
    (): ChoiceType[] | undefined =>
      chapter?.sections[storySection]?.choices?.filter(
        (c) => c.dependency !== false
      ),
    [chapter?.sections[storySection]?.choices]
  )

  const setNextChapterStart = useCallback(() => {
    setStoryChapterIndex((state) => state + 1)
    setStorySection('startChapter')
  }, [])

  const handleChoices = (choice: ChoiceType) => {
    if (choice.event === 'endChapter') {
      setNextChapterStart()
    } else {
      setStorySection(choice.event)
    }
  }

  // const handleSaveGame = () => {
  //   localStorage.setItem('story-section', storySection)
  //   localStorage.setItem('chapter', JSON.stringify(storyChapterIndex))
  // }

  // const handleLoadGame = () => {
  //   const section = localStorage.getItem('story-section') as string
  //   const chapterIndex = Number(localStorage.getItem('chapter'))
  //   setStoryChapterIndex(chapterIndex)
  //   setStorySection(section)
  // }

  // Created auto load
  // useEffect(() => {
  //   if (
  //     localStorage.getItem('chapter') &&
  //     localStorage.getItem('story-section')
  //   ) {
  //     handleLoadGame()
  //   }
  // }, [])

  return (
    <div className={styles.container}>
      <ChapterHeading chapterHeading={chapter?.['chapterName'] as string} />
      <SectionText
        sectionText={chapter?.sections[storySection]?.text as string}
      />
      <div
        className={clsx(
          styles['btn-container'],
          choices && choices.length <= 1
            ? styles['btn-container-single-choice']
            : styles['btn-container-multiple-choice']
        )}
      >
        {choices?.map((choice) => (
          <Choice
            key={choice.event}
            choice={choice}
            onClick={() => handleChoices(choice)}
          />
        ))}
      </div>
      {/* <Button type="button" onClick={() => handleSaveGame()}>
        Save Game
      </Button>
      <Button type="button" onClick={() => handleLoadGame()}>
        Load Game
      </Button> */}
    </div>
  )
}

export default StoryWizard
