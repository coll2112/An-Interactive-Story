import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useChapterProvider } from './chapter'

const GameOptionsContext = createContext<any>(undefined)

const GameOptionsProvider = ({ children }) => {
  const { chapter } = useChapterProvider()
  const [bgMusic, setBgMusic] = useState<HTMLAudioElement>()
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [toggleOptionsOverlay, setToggleOptionsOverlay] = useState(false)
  const [audioLevel, setAudioLevel] = useState<number>()

  useEffect(() => {
    void bgMusic?.load()
    const audio = new Audio(chapter?.background?.music)
    setBgMusic(audio)
  }, [chapter])

  useMemo(() => {
    if (bgMusic) {
      bgMusic.loop = true
      bgMusic.src = chapter.background.music
      bgMusic.volume = 0.5
      setAudioLevel(bgMusic.volume)

      // This will throw error in Chrome
      void bgMusic.play().then(() => {
        setIsAudioPlaying(true)
      })
    }
  }, [bgMusic])

  const handleMute = (): void => {
    if (!bgMusic) return
    bgMusic.muted = !bgMusic.muted
    setIsMuted(bgMusic.muted)
  }

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

  const handleAudioLevel = (volumeSet: 'increase' | 'decrease'): void => {
    if (!bgMusic) return

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
  }

  const currentGameOptions = {
    isAudioPlaying,
    isMuted,
    toggleOptionsOverlay,
    audioLevel,
    setToggleOptionsOverlay,
    handleAudioLevel,
    handleMute,
    handlePlay,
    handleStop
  }

  return (
    <GameOptionsContext.Provider value={currentGameOptions}>
      {children}
    </GameOptionsContext.Provider>
  )
}

export default GameOptionsProvider
export const useGameOptionsProvider = () => useContext(GameOptionsContext)
