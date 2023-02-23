import { CSSProperties } from 'react'

export interface ChapterChoices {
  [x: string]: {
    isSelected?: boolean
    event: string | any
    dependency?: string[]
  }
}

export interface Choice {
  event: string
  text: string
  dependency?: boolean
}

export interface ChoiceDependencies {
  [x: string]: boolean
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
  choiceDependencies?: ChoiceDependencies
  sections: Section
  background?: BackgroundImageStyles
}
