import { CSSProperties } from 'react'

export interface ChapterChoices {
  [x: string]: string
}

export interface Choice {
  event: string
  text: string
}

export interface Section {
  [event: string]: {
    text: string
    choices?: Choice[]
  }
}

export interface BackgroundImageStyles {
  image: string
  styles?: CSSProperties
}

export interface Chapter {
  chapterIndex: number
  chapterName: string
  sections: Section
  background?: BackgroundImageStyles
}
