import { createContext, useContext, useEffect, useState } from 'react'
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
    if (chapter?.background?.music) {
      setBgMusic(new Audio(chapter.background.music))
    } else {
      setBgMusic(new Audio(''))
      void bgMusic?.pause()
    }

    if (bgMusic) {
      bgMusic.loop = true
      setAudioLevel(bgMusic.volume)
    }
  }, [chapter])

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
