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

  const handleChoices = (choice: any) => {
    if (choice === 'end-chapter') {
      setNextChapterStart()
    } else {
      setStorySection(choice)
    }
  }

  return (
    <div className={styles.container}>
      <h3>{chapter?.['chapterName']}</h3>
      <p>{chapter?.sections[storySection]?.text}</p>
      {choices?.map((choice) => (
        <button
          key={choice}
          type="button"
          onClick={() => handleChoices(choice)}
        >
          {choice.replaceAll('-', ' ')}
        </button>
      ))}
    </div>
  )
}

export default Main
