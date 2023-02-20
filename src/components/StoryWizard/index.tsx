import clsx from 'clsx'
import { useState } from 'react'
import useGetChapter from '~/hooks/useGetChapter'
import { Choice as ChoiceType } from '~/types/story'
import ChapterHeading from '~components/ChapterHeading'
import Choice from '~components/Choice'
import SectionText from '~components/SectionText'

import styles from './storyWizard.module.scss'

const StoryWizard = () => {
  const [activeEvent, setActiveEvent] = useState<string>('startChapter')
  const [storyChapterIndex, setStoryChapterIndex] = useState<number>(0)
  const { chapter, sections, currentChoices } = useGetChapter(
    storyChapterIndex,
    activeEvent
  )

  console.log(sections)

  const setNextChapterStart = () => {
    setStoryChapterIndex((state) => state + 1)
    setActiveEvent('startChapter')
  }

  const handleChoices = (choice: ChoiceType) => {
    if (choice.event === 'endChapter') {
      setNextChapterStart()
    } else {
      setActiveEvent(choice.event)
    }
  }

  // Created auto load
  // useEffect(() => {
  //   if (
  //     localStorage.getItem('chapter') &&
  //     localStorage.getItem('story-section')
  //   ) {
  //     handleLoadGame()
  //   }
  // }, [])

  if (!chapter || !sections) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.container}>
      <ChapterHeading chapterHeading={chapter.chapterName} />
      <SectionText sectionText={sections?.[activeEvent].text} />
      <div
        className={clsx(
          styles['btn-container'],
          currentChoices && currentChoices.length <= 1
            ? styles['btn-container-single-choice']
            : styles['btn-container-multiple-choice']
        )}
      >
        {currentChoices?.map((choice) => (
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
