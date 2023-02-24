import { Chapter, ChapterChoices } from '~/types/story'

export const ChapterTwoChoices: ChapterChoices = {
  startChapter: 'startChapter'
}

export const ChapterTwo: Chapter = {
  index: 1,
  name: 'This section is a work in progress',
  background: {
    image: 'https://media.tenor.com/EaJbvOuvPiYAAAAd/pixel-art-pixel.gif',
    styles: {
      backgroundPosition: 'center',
      opacity: '0.6'
    }
  },
  sections: {
    [ChapterTwoChoices.startChapter]: {
      text: 'Work in progress...'
    }
  }
}
