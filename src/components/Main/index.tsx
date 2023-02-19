import React, { useState } from 'react'
import { StoryTree } from '~/config/story'

import styles from './main.module.scss'

const Main = () => {
  const [storySection, setStorySection] = useState('start-chapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)

  const chapter = StoryTree.find((c) => c.chapterIndex === storyChapterIndex)
  const choices = chapter?.sections[storySection]?.choices

  const setNextChapter = () => {
    setStoryChapterIndex((state) => state + 1)
    setStorySection('start-chapter')
  }

  const handleChoicesSelect = (choice: any) => {
    if (choice === 'end-chapter') {
      setNextChapter()
    } else {
      setStorySection(choice)
    }
  }

  console.log(chapter?.sections)

  return (
    <div className={styles.container}>
      <h3>{chapter?.['chapterName']}</h3>
      <p>{chapter?.sections[storySection]?.text}</p>
      {choices &&
        chapter?.sections[storySection].choices.map((c) => (
          <button key={c} type="button" onClick={() => handleChoicesSelect(c)}>
            {c.replaceAll('-', ' ')}
          </button>
        ))}
    </div>
  )
}

export default Main
