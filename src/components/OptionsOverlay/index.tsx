import clsx from 'clsx'
import { useGameOptionsProvider } from '~/contexts/game-options'
import Button from '~components/Base/Button'

import styles from './optionsOverlay.module.scss'

const OptionsOverlay = () => {
  const {
    isAudioPlaying,
    isMuted,
    toggleOptionsOverlay,
    audioLevel,
    handleAudioLevel,
    handleMute,
    handlePlay,
    handleStop
  } = useGameOptionsProvider()

  const handleToggleAudio = (): void => {
    if (isAudioPlaying) {
      handleStop()
    } else {
      handlePlay()
    }
  }

  return (
    <div
      className={clsx(
        styles['options-overlay'],
        !toggleOptionsOverlay && styles['options-overlay-hide'],
        toggleOptionsOverlay && styles['options-overlay-show']
      )}
    >
      <div className={styles['options-overlay-content']}>
        <p className={styles['options-overlay-header']}>Options</p>
        <div className={styles.option}>
          <Button type="button" onClick={handleToggleAudio}>
            {!isAudioPlaying ? 'Play' : 'Stop'} BG Music
          </Button>
        </div>
        <div className={styles.option}>
          <Button disabled={!isAudioPlaying} type="button" onClick={handleMute}>
            {!isMuted ? 'Mute' : 'Unmute'} Audio
          </Button>
        </div>
        <div className={styles.option}>
          <Button
            disabled={!isAudioPlaying}
            type="button"
            onClick={() => handleAudioLevel('decrease')}
          >
            Volume -
          </Button>
          <p>{audioLevel * 100}</p>
          <Button
            disabled={!isAudioPlaying}
            type="button"
            onClick={() => handleAudioLevel('increase')}
          >
            Volume +
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OptionsOverlay
