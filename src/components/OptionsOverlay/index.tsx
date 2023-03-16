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
    handleSfxAudioLevel,
    handleMute,
    handleMuteSFX,
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
            {!isMuted ? 'Mute' : 'Unmute'} BG Audio
          </Button>
        </div>
        <div className={styles.option}>
          <Button
            disabled={!isAudioPlaying}
            type="button"
            onClick={() => handleAudioLevel('decrease')}
          >
            BG Volume -
          </Button>
          <p>{audioLevel * 100}</p>
          <Button
            disabled={!isAudioPlaying}
            type="button"
            onClick={() => handleAudioLevel('increase')}
          >
            BG Volume +
          </Button>
        </div>
        <div className={styles.option}>
          <Button type="button" onClick={handleMuteSFX}>
            {!isSfxMuted ? 'Mute' : 'Unmute'} SFX
          </Button>
        </div>
        <div className={styles.option}>
          <Button type="button" onClick={() => handleSfxAudioLevel('decrease')}>
            SFX Volume -
          </Button>
          <p>{sfxAudioLevel * 100}</p>
          <Button type="button" onClick={() => handleSfxAudioLevel('increase')}>
            SFX Volume +
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OptionsOverlay
