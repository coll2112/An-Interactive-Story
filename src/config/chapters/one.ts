import { Chapter, ChapterChoices } from '~/types/story'

export const choices: ChapterChoices = {
  startChapter: 'start-chapter',
  readyToPlay: 'ready-to-play',
  letsPlay: 'lets-play',
  nah: 'nah',
  endChapter: 'end-chapter'
}

export const ChapterOne: Chapter = {
  chapterIndex: 0,
  chapterName: 'Chapter 1 - The Adventure Begins...',
  sections: {
    [choices.startChapter]: {
      text: 'Hi, welcome to the game',
      choices: [
        {
          event: choices.readyToPlay,
          text: 'Thanks!'
        }
      ]
    },
    [choices.readyToPlay]: {
      text: 'Are you ready to play?',
      choices: [
        { event: choices.letsPlay, text: "Let's do it!" },
        { event: choices.nah, text: "I don't wanna" }
      ]
    },
    [choices.letsPlay]: {
      text: "Then let's begin...",
      choices: [{ text: 'Okay!!', event: choices.endChapter }]
    },
    [choices.nah]: {
      text: "Oh, that's too bad. Maybe next time.",
      choices: [{ event: choices.endChapter, text: 'Next' }]
    }
  }
}
