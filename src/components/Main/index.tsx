import React, { useState } from 'react'
import { StoryTree } from '~/config/story'

import styles from './main.module.scss'

const Main = () => {
  const [storySection, setStorySection] = useState('start-chapter')
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

  return (
    <div className={styles.container}>
      <h3>{chapter?.['chapterName']}</h3>
      <p>{chapter?.sections[storySection]?.text}</p>
      {choices?.map((choice) => (
        <button
          key={choice.event}
          type="button"
          onClick={() => handleChoices(choice.event)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  )
}

export default Main
