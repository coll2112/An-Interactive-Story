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

export interface BackgroundOptions {
  image: string
  music?: string
  styles?: CSSProperties
}

export interface Chapter {
  index: number
  name: string
  sections: Section
  background?: BackgroundOptions
}
