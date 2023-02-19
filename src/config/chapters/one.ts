import { Chapter, ChapterChoices } from '~/types/story'

const CHOICES: ChapterChoices = {
  startChapter: 'start-chapter',
  lineTwo: 'line-one',
  drinkCoffee: 'drink-coffee',
  ignoreCoffee: 'ignore-coffee',
  endChapter: 'end-chapter'
}

export const ChapterOne: Chapter = {
  chapterIndex: 0,
  chapterName: 'Chapter 1: The Long Dark',
  sections: {
    [CHOICES.startChapter]: {
      text: 'The sky is the color of ash. The wind hits the old window of your home, rattling it as if someone just launched a cannon right next to you. The cold draft seeps underneath the doorway.',
      choices: [{ text: "It's so cold...", event: CHOICES.lineTwo }]
    },
    [CHOICES.lineTwo]: {
      text: "It doesn't take long for air to hit your feet, the only thing your blanket isn't long enough to reach. The morning coffee you made sits in front of you still untouched.",
      choices: [
        { text: 'Take a sip of coffee', event: CHOICES.drinkCoffee },
        { text: 'Ignore the coffee', event: CHOICES.ignoreCoffee }
      ]
    },
    [CHOICES.ignoreCoffee]: {
      text: 'The cup of coffee continues to sit untouched, getting colder every second that goes by. Maybe you should drink it...?',
      choices: [{ text: 'Take a sip of coffee', event: CHOICES.drinkCoffee }]
    },
    [CHOICES.drinkCoffee]: {
      text: 'The hot coffee hits your lip. You flinch to the sudden, bitter, bite it leaves on your tongue. Perhaps you should have let it cool off more...'
    }
  }
}
