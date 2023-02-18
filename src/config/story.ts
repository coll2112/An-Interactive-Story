const chapter1 = {
  start: 'start',
  readyToPlay: 'ready-to-play',
  letsPlay: 'lets-play',
  nah: 'nah',
  end: 'end'
}

export const StoryTree = {
  chapterIndex: 0,
  chapterName: 'Chapter 1 - The Adventure Begins...',
  sections: {
    [chapter1.start]: {
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
      choices: [chapter1.end]
    },
    [chapter1.end]: {
      text: 'This is the end '
    }
  }
}
