export interface ChapterChoices {
  [x: string]: {
    event: string | any
    dependency?: string[]
  }
}

export interface Choice {
  event: string
  text: string
  dependency?: boolean
}

export interface Dependencies {
  [x: string]: boolean
}

export interface Section {
  [event: string]: {
    text: string
    choices?: Choice[]
  }
}

export interface Chapter {
  chapterIndex: number
  chapterName: string
  choiceDependencies: Dependencies
  sections: Section
}
