import { Chapter, ChapterChoices } from '~/types/story'

export const ChapterTwoChoices: ChapterChoices = {
  startChapter: 'start-chapter'
}

export const ChapterTwo: Chapter = {
  chapterIndex: 1,
  chapterName: 'Chapter 2 - The Adventure Continues...',
  sections: {
    [ChapterTwoChoices.startChapter]: {
      text: 'Hey welcome back to your adventure.'
    }
  }
}
