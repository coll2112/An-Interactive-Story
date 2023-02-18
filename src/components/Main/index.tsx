import React, { useState } from 'react'
import { StoryTree } from '~/config/story'

import styles from './main.module.scss'

const Main = () => {
  const [storySection, setStorySection] = useState('start')

  return (
    <div className={styles.container}>
      <h3>{StoryTree['chapterName']}</h3>
      <p>{StoryTree.sections[storySection].text}</p>
      {StoryTree.sections[storySection].choices?.map((c) => (
        <button key={c} type="button" onClick={() => setStorySection(c)}>
          {c.replaceAll('-', ' ')}
        </button>
      ))}
    </div>
  )
}

export default Main
