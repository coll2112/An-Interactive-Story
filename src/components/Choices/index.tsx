import { FunctionComponent } from 'react'
import { Choice } from '~/types/story'

import styles from './choices.module.scss'

interface ChoicesProps {
  choice: Choice
  onClick(): void
}

const Choices: FunctionComponent<ChoicesProps> = ({ choice, onClick }) => (
  <button className={styles['choice-btn']} type="button" onClick={onClick}>
    {choice.text}
  </button>
)

export default Choices
