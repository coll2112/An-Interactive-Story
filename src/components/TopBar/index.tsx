import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useGameOptionsProvider } from '~/contexts/game-options'
import useGameSave from '~/hooks/useGameSave'
import Button from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'

import styles from './topBar.module.scss'

interface Props {
  chapterHeading: string
}

const TopBar = ({ chapterHeading }: Props) => {
  const {
    isAudioPlaying,
    bgMusic,
    isMuted,
    setIsAudioPlaying,
    handleMute,
    handlePlay,
    handleStop
  } = useGameOptionsProvider()
  const { saveData, handleSaveGame, handleLoadGame } = useGameSave()
  const [showOptionsOverlay, setShowOptionsOverlay] = useState(false)

  const handleToggleAudio = (): void => {
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

  console.log(bgMusic)

  return (
    <div className={styles.container}>
      <ChapterHeading chapterHeading={chapterHeading} />
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
          <div className={styles.option}>
            <Button type="button" onClick={handleMute}>
              Mute Audio
            </Button>
            <p>{isMuted ? 'On' : 'Off'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
