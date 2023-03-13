import { createContext, useContext, useEffect, useState } from 'react'
import { useChapterProvider } from './chapter'

const GameOptionsContext = createContext<any>(undefined)

const GameOptionsProvider = ({ children }) => {
  const { chapter } = useChapterProvider()
  const [bgMusic, setBgMusic] = useState<HTMLAudioElement>()
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    setBgMusic(new Audio(chapter?.background?.music))
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

  const currentGameOptions = {
    isAudioPlaying,
    bgMusic,
    isMuted,
    setIsAudioPlaying,
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
