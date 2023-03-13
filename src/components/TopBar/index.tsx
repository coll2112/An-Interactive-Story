import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useGameOptionsProvider } from '~/contexts/game-options'
import useGameSave from '~/hooks/useGameSave'
import Button from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'

import styles from './topBar.module.scss'

interface Props {
  chapterHeading: string
  // chapterMusic: string
}

const TopBar = ({ chapterHeading }: Props) => {
  const {
    isAudioPlaying,
    setIsAudioPlaying,
    bgMusic,
    // handleMute,
    handlePlay,
    handleStop
  } = useGameOptionsProvider()
  const { saveData, handleSaveGame, handleLoadGame } = useGameSave()
  const [showOptionsOverlay, setShowOptionsOverlay] = useState(false)

  const handleToggleAudio = (): void => {
    // handleMute()
    if (isAudioPlaying) {
      handleStop()
      setIsAudioPlaying(false)
    } else {
      handlePlay()
      setIsAudioPlaying(true)
    }
  }

  const handleOptionsOverlay = (): void => {
    setShowOptionsOverlay(!showOptionsOverlay)
  }

  useEffect(() => {
    handlePlay()
  }, [bgMusic])

  console.log(bgMusic)

  return (
    <div className={styles.container}>
      <ChapterHeading chapterHeading={chapterHeading} />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <audio autoPlay controls loop src={bgMusic} /> */}
      <div className={styles['container-buttons']}>
        <Button type="button" onClick={handleSaveGame}>
          Save Game
        </Button>
        <Button
          disabled={saveData?.savedActiveEvent === null}
          type="button"
          onClick={handleLoadGame}
        >
          Load Game
        </Button>
        <Button type="button" onClick={handleOptionsOverlay}>
          Options
        </Button>
      </div>
      {/* TODO: create options-overlay component */}
      <div
        className={clsx(
          styles['options-overlay'],
          !showOptionsOverlay && styles['options-overlay-hide']
        )}
      >
        <div className={styles['options-overlay-content']}>
          <div className={styles.option}>
            <Button type="button" onClick={handleToggleAudio}>
              Toggle Audio
            </Button>
            <p>{isAudioPlaying ? 'On' : 'Off'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
