import clsx from 'clsx'
import { useGameOptionsProvider } from '~/contexts/game-options'
import Button from '~components/Base/Button'

import styles from './optionsOverlay.module.scss'

const OptionsOverlay = () => {
  const {
    isAudioPlaying,
    isMuted,
    isSfxMuted,
    toggleOptionsOverlay,
    audioLevel,
    sfxAudioLevel,
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
          <Button
            disabled={!isAudioPlaying}
            type="button"
            onClick={() => handleMute('bgMusic')}
          >
            {!isMuted ? 'Mute' : 'Unmute'} BG Audio
          </Button>
        </div>
        <div className={styles.option}>
          <Button
            disabled={!isAudioPlaying}
            type="button"
            onClick={() => handleAudioLevel('decrease', 'bgMusic')}
          >
            BG Volume -
          </Button>
          <p>{audioLevel && audioLevel * 100}</p>
          <Button
            disabled={!isAudioPlaying}
            type="button"
            onClick={() => handleAudioLevel('increase', 'bgMusic')}
          >
            BG Volume +
          </Button>
        </div>
        <div className={styles.option}>
          <Button type="button" onClick={() => handleMute('sfx')}>
            {!isSfxMuted ? 'Mute' : 'Unmute'} SFX
          </Button>
        </div>
        <div className={styles.option}>
          <Button
            type="button"
            onClick={() => handleAudioLevel('decrease', 'sfx')}
          >
            SFX Volume -
          </Button>
          <p>{sfxAudioLevel && sfxAudioLevel * 100}</p>
          <Button
            type="button"
            onClick={() => handleAudioLevel('increase', 'sfx')}
          >
            SFX Volume +
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OptionsOverlay
