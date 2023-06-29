import clsx from 'clsx'
import { useGameOptionsProvider } from '~/contexts/game-options'
import { Button } from '~components/Base/Button'
import { GiLoad, GiSave } from 'react-icons/gi'
import { useRouter } from 'next/router'

import styles from './optionsOverlay.module.scss'

export const OptionsOverlay = () => {
  const {
    isAudioPlaying,
    isMuted,
    isSfxMuted,
    toggleOptionsOverlay,
    audioLevel,
    sfxAudioLevel,
    saveData,
    handleAudioLevel,
    handleMute,
    handlePlay,
    handleStop,
    handleSaveGame,
    handleLoadGame,
    setToggleOptionsOverlay
  } = useGameOptionsProvider()

  const { route, push } = useRouter()

  const handleToggleAudio = () => {
    if (isAudioPlaying) {
      handleStop()
    } else {
      handlePlay()
    }
  }

  const closeOverlayOnOptionChange = (optionCallback: VoidFunction) => {
    optionCallback()
    setToggleOptionsOverlay(false)
  }

  const navigateToTitle: VoidFunction = () => {
    handleStop()
    return route !== '/title' && push('/title')
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
        {route !== '/title' && (
          <>
            <div className={styles.option}>
              <Button
                type="button"
                onClick={() => closeOverlayOnOptionChange(handleSaveGame)}
              >
                <GiSave className={styles.icon} />
                Save
              </Button>
            </div>
            <div className={styles.option}>
              <Button
                disabled={saveData?.savedActiveEvent === null}
                type="button"
                onClick={() => closeOverlayOnOptionChange(handleLoadGame)}
              >
                <GiLoad className={styles.icon} />
                Load
              </Button>
            </div>
          </>
        )}
        <div className={styles.option}>
          <Button
            type="button"
            onClick={() => closeOverlayOnOptionChange(navigateToTitle)}
          >
            Return to Title Screen
          </Button>
        </div>
      </div>
    </div>
  )
}
