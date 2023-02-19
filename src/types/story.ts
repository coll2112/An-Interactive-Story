export interface ChapterChoices {
  [x: string]: string
}

export interface Choice {
  event: string
  text: string
}

export interface Section {
  [x: string]: {
    text: string
    choices?: Choice[]
  }
}

export interface Chapter {
  chapterIndex: number
  chapterName: string
  sections: Section
}
