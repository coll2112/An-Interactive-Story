// import { ChapterOneChoices } from './choices'

export const ChapterOneChoices = {
  startChapter: 'start-chapter',
  readyToPlay: 'ready-to-play',
  letsPlay: 'lets-play',
  nah: 'nah',
  endChapter: 'end-chapter'
}

export const ChapterOne = {
  chapterIndex: 0,
  chapterName: 'Chapter 1 - The Adventure Begins...',
  sections: {
    [ChapterOneChoices.startChapter]: {
      text: 'Hi, welcome to the game',
      choices: [ChapterOneChoices.readyToPlay]
    },
    [ChapterOneChoices.readyToPlay]: {
      text: 'Are you ready to play?',
      choices: [ChapterOneChoices.letsPlay, ChapterOneChoices.nah]
    },
    [ChapterOneChoices.letsPlay]: {
      text: "Then let's begin...",
      choices: []
    },
    [ChapterOneChoices.nah]: {
      text: "Oh, that's too bad. Maybe next time.",
      choices: [ChapterOneChoices.endChapter]
    }
  }
}
