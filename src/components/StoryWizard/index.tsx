import clsx from 'clsx'
import { CSSProperties, FunctionComponent } from 'react'
import useGameSave from '~/hooks/useGameSave'
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

  const { saveData, handleSaveGame, handleLoadGame } = useGameSave(
    activeEvent,
    storyChapterIndex,
    setActiveEvent,
    setStoryChapterIndex
  )

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

  const backgroundStyles: CSSProperties = {
    backgroundImage: `url(${chapter?.background?.image})`,
    backgroundSize: 'cover',
    ...chapter?.background?.styles
  }

  if (!chapter || !sections) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <audio
        autoPlay
        controls
        loop
        id="audio-player"
        src="sounds/find-out.mp3"
      /> */}
      <TopBar
        chapterHeading={chapter.name}
        hasActiveSave={saveData?.savedActiveEvent !== null}
        onLoadClick={handleLoadGame}
        onSaveClick={handleSaveGame}
      />
      <div className={styles['viewport']}>
        <span className={styles['viewport-bgImage']} style={backgroundStyles} />
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
