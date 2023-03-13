import clsx from 'clsx'
import { useGameOptionsProvider } from '~/contexts/game-options'
import Button from '~components/Base/Button'

import styles from './optionsOverlay.module.scss'

const OptionsOverlay = () => {
  const {
    isAudioPlaying,
    bgMusic,
    isMuted,
    toggleOptionsOverlay,
    setIsAudioPlaying,
    handleMute,
    handlePlay,
    handleStop
  } = useGameOptionsProvider()

  const handleToggleAudio = (): void => {
    if (isAudioPlaying) {
      handleStop()
      setIsAudioPlaying(false)
    } else {
      handlePlay()
      setIsAudioPlaying(true)
    }
  }

  console.log(bgMusic)

  return (
    <div
      className={clsx(
        styles['options-overlay'],
        !toggleOptionsOverlay && styles['options-overlay-hide']
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
  )
}

export default OptionsOverlay
