import React, { useState } from 'react'
import { StoryTree } from '~/config/story'

import styles from './main.module.scss'

const Main = () => {
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

  const handleSaveGame = () => {
    localStorage.setItem('story-section', storySection)
    localStorage.setItem('chapter', JSON.stringify(storyChapterIndex))
  }

  const handleLoadGame = () => {
    const section = localStorage.getItem('story-section') as string
    const chapterIndex = Number(localStorage.getItem('chapter'))
    setStoryChapterIndex(chapterIndex)
    setStorySection(section)
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
      <button type="button" onClick={() => handleSaveGame()}>
        Save Game
      </button>
      <button type="button" onClick={() => handleLoadGame()}>
        Load Game
      </button>
    </div>
  )
}

export default Main
