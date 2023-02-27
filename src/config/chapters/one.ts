import { Chapter, ChapterChoices } from '~/types/story'

const CHOICES: ChapterChoices = {
  startChapter: 'startChapter',
  lineTwo: 'lineOne',
  drinkCoffee: 'drinkCoffee',
  ignoreCoffee: 'ignoreCoffee',
  endChapter: 'endChapter'
}

/** Returns the event of the choice passed in. */
const handleEvent = (event: string) => CHOICES[event]

export const ChapterOne: Chapter = {
  index: 0,
  name: 'Chapter 1: Coffee Time',
  background: {
    image:
      'https://i.pinimg.com/originals/27/b0/e7/27b0e7421e2feab63a21fadb79f6c9c1.gif',
    styles: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.3',
      filter: 'grayscale(50%)'
    },
    music: 'sounds/find-out.mp3'
  },
  sections: {
    [handleEvent('startChapter')]: {
      text: `The sky is the color of ash. The wind hits the old window of
      your home, rattling it as if someone just launched a cannon right next to
      you. The cold draft seeps underneath the doorway.`,
      choices: [
        {
          text: 'Next',
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
    }
  }
}
