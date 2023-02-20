import { Chapter, ChapterChoices } from '~/types/story'

export const ChapterTwoChoices: ChapterChoices = {
  startChapter: { event: 'startChapter' }
}

export const ChapterTwo: Chapter = {
  chapterIndex: 1,
  chapterName: 'This section is a work in progress',
  sections: {
    [ChapterTwoChoices.startChapter.event]: {
      text: 'Work in progress...'
    }
  }
}
