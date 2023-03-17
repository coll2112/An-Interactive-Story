import { Dispatch } from 'react'

export interface IGameOptionsContext {
  isAudioPlaying: boolean
  isMuted: boolean
  isSfxMuted: boolean
  toggleOptionsOverlay: boolean
  audioLevel: number | undefined
  sfxAudioLevel: number | undefined
  sfx: HTMLAudioElement | undefined
  setToggleOptionsOverlay: Dispatch<boolean>
  handleAudioLevel(
    volumeSet: 'increase' | 'decrease',
    audioType: 'bgMusic' | 'sfx'
  ): void
  handleMute(audioType: 'bgMusic' | 'sfx'): void
  handlePlay(): void
  handleStop(): void
}
