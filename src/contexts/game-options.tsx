import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GameOptionsContextValues } from '~/types/context'
import useGameSave from '~/hooks/useGameSave'
import { useChapterProvider } from './chapter'

const defaultContextValues: GameOptionsContextValues = {
  isAudioPlaying: false,
  isMuted: false,
  isSfxMuted: false,
  toggleOptionsOverlay: false,
  audioLevel: undefined,
  sfxAudioLevel: undefined,
  sfx: undefined,
  saveData: {
    savedActiveEvent: 'startChapter',
    savedChapterIndex: 0
  },
  setToggleOptionsOverlay: () => null,
  handleAudioLevel: () => null,
  handleMute: () => null,
  handlePlay: () => null,
  handleStop: () => null,
  handleLoadGame: () => null,
  handleSaveGame: () => null
}

const GameOptionsContext =
  createContext<GameOptionsContextValues>(defaultContextValues)

const GameOptionsProvider = ({ children }) => {
  const { chapter } = useChapterProvider()
  const { saveData, handleSaveGame, handleLoadGame } = useGameSave()

  const [bgMusic, setBgMusic] = useState<HTMLAudioElement>()
  const [sfx, setSfx] = useState<HTMLAudioElement>()
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isSfxMuted, setIsSfxMuted] = useState(false)
  const [toggleOptionsOverlay, setToggleOptionsOverlay] = useState(false)
  const [audioLevel, setAudioLevel] = useState<number>()
  const [sfxAudioLevel, setSfxAudioLevel] = useState<number>()

  // Sets the bgAudio when the chapter changes, if the chapter includes it
  useEffect(() => {
    void bgMusic?.load()
    const bgAudio = new Audio(chapter?.background?.music)
    const buttonClickSfx = new Audio('sounds/button-click.mp3')

    setBgMusic(bgAudio)
    setSfx(buttonClickSfx)
  }, [chapter])

  // Sets the correct values whenever the bgMusic changes
  useMemo(() => {
    if (bgMusic && chapter?.background?.music) {
      bgMusic.loop = true
      bgMusic.src = chapter?.background?.music
      bgMusic.volume = 0.5

      setAudioLevel(bgMusic.volume)

      // This will throw error in Chrome
      void bgMusic.play().then(() => {
        setIsAudioPlaying(true)
      })
    }
  }, [bgMusic])

  // Sets the correct values sound effects
  useMemo(() => {
    if (sfx) {
      sfx.volume = 0.5
      setSfxAudioLevel(sfx.volume)
    }
  }, [sfx])

  const handlePlay = (): void => {
    if (!bgMusic) return
    void bgMusic.play()
    setIsAudioPlaying(true)
  }

  const handleStop = (): void => {
    if (!bgMusic) return
    void bgMusic.pause()
    bgMusic.currentTime = 0
    setIsAudioPlaying(false)
  }

  const handleAudioLevel = (
    volumeSet: 'increase' | 'decrease',
    audioType: 'bgMusic' | 'sfx'
  ): void => {
    if (!bgMusic || !sfx) return

    if (audioType === 'bgMusic') {
      switch (volumeSet) {
        case 'increase':
          if (bgMusic.volume >= 1) break
          bgMusic.volume += 0.25
          break
        case 'decrease':
          if (bgMusic.volume <= 0) break
          bgMusic.volume -= 0.25
          break
        default:
          break
      }

      setAudioLevel(bgMusic.volume)
    } else if (audioType === 'sfx') {
      switch (volumeSet) {
        case 'increase':
          if (sfx.volume >= 1) break
          sfx.volume += 0.25
          break
        case 'decrease':
          if (sfx.volume <= 0) break
          sfx.volume -= 0.25
          break
        default:
          break
      }

      setSfxAudioLevel(sfx.volume)
    }
  }

  const handleMute = (audioType: 'bgMusic' | 'sfx'): void => {
    if (!bgMusic || !sfx) return

    if (audioType === 'bgMusic') {
      bgMusic.muted = !bgMusic.muted
      setIsMuted(bgMusic.muted)
    } else if (audioType === 'sfx') {
      sfx.muted = !sfx.muted
      setIsSfxMuted(sfx.muted)
    }
  }

  const currentGameOptions: GameOptionsContextValues = {
    isAudioPlaying,
    isMuted,
    isSfxMuted,
    toggleOptionsOverlay,
    audioLevel,
    sfx,
    sfxAudioLevel,
    saveData,
    setToggleOptionsOverlay,
    handleAudioLevel,
    handleMute,
    handlePlay,
    handleStop,
    handleSaveGame,
    handleLoadGame
  }

  return (
    <GameOptionsContext.Provider value={currentGameOptions}>
      {children}
    </GameOptionsContext.Provider>
  )
}

export default GameOptionsProvider
export const useGameOptionsProvider = () => useContext(GameOptionsContext)
