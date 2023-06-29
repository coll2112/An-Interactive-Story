import clsx from 'clsx'
import { CSSProperties, useEffect, useState } from 'react'
import { useChapterProvider } from '~/contexts/chapter'
import { Choice as IChoice } from '~/types/story'
import Choice from '~components/Choice'
import OptionsOverlay from '~components/OptionsOverlay'
import SectionText from '~components/SectionText'
import TopBar from '~components/TopBar'

import styles from './storyWizard.module.scss'

const FADE_IN_OUT_TIME = 800

const StoryWizard: React.FC = () => {
  const {
    chapter,
    sections,
    currentChoices,
    activeEvent,
    setActiveEvent,
    setStoryChapterIndex
  } = useChapterProvider()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), FADE_IN_OUT_TIME)
  })

  const handleChoices = (choice: IChoice) => {
    setIsVisible(false)
    setTimeout(() => {
      if (choice.event === 'endChapter') {
        setStoryChapterIndex((state: number) => state + 1)
        setActiveEvent('startChapter')
      } else {
        setActiveEvent(choice.event)
      }
      setIsVisible(true)
    }, FADE_IN_OUT_TIME)
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
      <TopBar chapterHeading={chapter.name} />
      <div className={styles['viewport']}>
        <span className={styles['viewport-bgImage']} style={backgroundStyles} />
        <OptionsOverlay />
        <SectionText
          className={clsx(
            styles['fade-in-out'],
            isVisible ? styles['fade-in'] : ''
          )}
          sectionText={sections?.[activeEvent]?.text}
        />
        <div
          className={clsx(
            styles['button-container'],
            currentChoices && currentChoices.length <= 1
              ? styles['button-container-single-choice']
              : styles['button-container-multiple-choice']
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
    </div>
  )
}

export default StoryWizard
