import { Dispatch, SetStateAction } from 'react'
import { Chapter, Choice, Section } from './story'

export interface GameOptionsContextValues {
  isAudioPlaying: boolean
  isMuted: boolean
  isSfxMuted: boolean
  toggleOptionsOverlay: boolean
  audioLevel: number | undefined
  sfxAudioLevel: number | undefined
  sfx: HTMLAudioElement | undefined
  saveData: {
    savedActiveEvent: string
    savedChapterIndex: number
  }
  setToggleOptionsOverlay: Dispatch<boolean>
  handleAudioLevel(
    volumeSet: 'increase' | 'decrease',
    audioType: 'bgMusic' | 'sfx'
  ): void
  handleMute(audioType: 'bgMusic' | 'sfx'): void
  handlePlay(): void
  handleStop(): void
  handleSaveGame(): void
  handleLoadGame(): void
}

export interface ChapterContextValues {
  chapter: Chapter | undefined
  sections: Section | undefined
  currentChoices: Choice[] | undefined
  activeEvent: string
  storyChapterIndex: number
  setActiveEvent: Dispatch<SetStateAction<string>>
  setStoryChapterIndex: Dispatch<SetStateAction<number>>
}
