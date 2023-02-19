const chapter1 = {
  startChapter: 'start-chapter',
  readyToPlay: 'ready-to-play',
  letsPlay: 'lets-play',
  nah: 'nah',
  endChapter: 'end-chapter'
}

const chapter2 = {
  startChapter: 'start-chapter'
}

export const ChapterOne = {
  chapterIndex: 0,
  chapterName: 'Chapter 1 - The Adventure Begins...',
  sections: {
    [chapter1.startChapter]: {
      text: 'Hi, welcome to the game',
      choices: [chapter1.readyToPlay]
    },
    [chapter1.readyToPlay]: {
      text: 'Are you ready to play?',
      choices: [chapter1.letsPlay, chapter1.nah]
    },
    [chapter1.letsPlay]: {
      text: "Then let's begin...",
      choices: []
    },
    [chapter1.nah]: {
      text: "Oh, that's too bad. Maybe next time.",
      choices: [chapter1.endChapter]
    }
  }
}

export const ChapterTwo = {
  chapterIndex: 1,
  chapterName: 'Chapter 2 - The Adventure Continues...',
  sections: {
    [chapter2.startChapter]: {
      text: 'Hey welcome back to your adventure.',
      choices: []
    }
  }
}

export const StoryTree = [ChapterOne, ChapterTwo]
