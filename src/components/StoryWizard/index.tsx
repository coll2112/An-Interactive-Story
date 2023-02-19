import clsx from 'clsx'
import { useState } from 'react'
import { StoryTree } from '~/config/story'
import ChapterHeading from '~components/ChapterHeading'
import Choices from '~components/Choices'
import SectionText from '~components/SectionText'

import styles from './storyWizard.module.scss'

const StoryWizard = () => {
  const [storySection, setStorySection] = useState<string>('start-chapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)

  const chapter = StoryTree.find((c) => c.chapterIndex === storyChapterIndex)
  const choices = chapter?.sections[storySection]?.choices

  const setNextChapterStart = () => {
    setStoryChapterIndex((state) => state + 1)
    setStorySection('start-chapter')
  }

  const handleChoices = (choiceEvent: string) => {
    if (choiceEvent === 'end-chapter') {
      setNextChapterStart()
    } else {
      setStorySection(choiceEvent)
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
          <Choices
            key={choice.event}
            choice={choice}
            onClick={() => handleChoices(choice.event)}
          />
        ))}
      </div>
      {/* <button type="button" onClick={() => handleSaveGame()}>
        Save Game
      </button>
      <button type="button" onClick={() => handleLoadGame()}>
        Load Game
      </button> */}
    </div>
  )
}

export default StoryWizard
