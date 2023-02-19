import { Chapter, ChapterChoices } from '~/types/story'

const CHOICES: ChapterChoices = {
  startChapter: { event: 'startChapter' },
  lineTwo: { event: 'lineOne' },
  drinkCoffee: { event: 'drinkCoffee' },
  ignoreCoffee: { event: 'ignoreCoffee' },
  endChapter: { event: 'endChapter' }
}

/** Returns the event of the choice passed in. */
const handleEvent = (event: string) => CHOICES[event].event

export const ChapterOne: Chapter = {
  chapterIndex: 0,
  chapterName: 'Chapter 1: Coffee Time',
  sections: {
    [handleEvent('startChapter')]: {
      text: `The sky is the color of ash. The wind hits the old window of
      your home, rattling it as if someone just launched a cannon right next to
      you. The cold draft seeps underneath the doorway.`,
      choices: [
        {
          text: "It's so cold...",
          event: handleEvent('lineTwo')
        }
      ]
    },
    [handleEvent('lineTwo')]: {
      text: `It doesn't take long for air to hit your feet, the only thing your blanket isn't
      long enough to reach. The morning coffee you made sits in front of you still untouched.`,
      choices: [
        {
          text: 'Take a sip of coffee',
          event: handleEvent('drinkCoffee')
        },
        {
          text: 'Ignore the coffee',
          event: handleEvent('ignoreCoffee')
        }
      ]
    },
    [handleEvent('ignoreCoffee')]: {
      text: `The cup of coffee continues to sit untouched, getting colder every second that goes
      by. Maybe you should drink it...?`,
      choices: [
        {
          text: 'Take a sip of coffee',
          event: handleEvent('drinkCoffee')
        }
      ]
    },
    [handleEvent('drinkCoffee')]: {
      text: `The hot coffee hits your lip. You flinch to the sudden, bitter, bite it leaves on
      your tongue. Perhaps you should have let it cool off more...`,
      choices: [{ text: 'Next', event: handleEvent('endChapter') }]
    },
    [handleEvent('endChapter')]: {
      text: `It's whatever. The coffee is good, and your body is warm. The
      wind's bite is cold, so it's better to feel the coffee's bite instead.`
    }
  }
}
