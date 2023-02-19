import clsx from 'clsx'
import { useState } from 'react'
import { StoryTree } from '~/config/story'
import { Choice as ChoiceType } from '~/types/story'
import ChapterHeading from '~components/ChapterHeading'
import Choice from '~components/Choice'
import SectionText from '~components/SectionText'

import styles from './storyWizard.module.scss'

const StoryWizard = () => {
  const [storySection, setStorySection] = useState<string>('startChapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)

  const chapter = StoryTree.find((c) => c.chapterIndex === storyChapterIndex)

  const setNextChapterStart = () => {
    setStoryChapterIndex((state) => state + 1)
    setStorySection('start-chapter')
  }

  const handleChoices = (choice: ChoiceType) => {
    if (choice.event === 'end-chapter') {
      setNextChapterStart()
    } else {
      if (choice.dependency) {
        console.log(chapter?.choiceDependencies)
      }
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

  const handleCreateChoices = (): ChoiceType[] | undefined => {
    const choices = chapter?.sections[storySection]?.choices?.filter(
      (c) => c.dependency !== false
    )

    return choices
  }

  const choices = handleCreateChoices()

  console.log(choices)

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
