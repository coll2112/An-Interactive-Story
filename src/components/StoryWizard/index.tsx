import clsx from 'clsx'
import { FunctionComponent } from 'react'
import useGetChapter from '~/hooks/useGetChapter'
import { Choice as IChoice } from '~/types/story'
import Choice from '~components/Choice'
import SectionText from '~components/SectionText'
import TopBar from '~components/TopBar'

import styles from './storyWizard.module.scss'

const StoryWizard: FunctionComponent = () => {
  const {
    chapter,
    sections,
    currentChoices,
    activeEvent,
    storyChapterIndex,
    setActiveEvent,
    setStoryChapterIndex
  } = useGetChapter()

  const setNextChapterStart = () => {
    setStoryChapterIndex((state) => state + 1)
    setActiveEvent('startChapter')
  }

  const handleChoices = (choice: IChoice) => {
    if (choice.event === 'endChapter') {
      setNextChapterStart()
    } else {
      setActiveEvent(choice.event)
    }
  }

  if (!chapter || !sections) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.container}>
      <TopBar
        activeEvent={activeEvent}
        chapterHeading={chapter.chapterName}
        setActiveEvent={setActiveEvent}
        setStoryChapterIndex={setStoryChapterIndex}
        storyChapterIndex={storyChapterIndex}
      />
      <div className={styles['viewport']}>
        <SectionText sectionText={sections?.[activeEvent]?.text} />
      </div>
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
    </div>
  )
}

export default StoryWizard
