import { FunctionComponent } from 'react'
import { Choice } from '~/types/story'

interface ChoicesProps {
  choice: Choice
  onClick(): void
}

const Choices: FunctionComponent<ChoicesProps> = ({ choice, onClick }) => (
  <button type="button" onClick={onClick}>
    {choice.text}
  </button>
)

export default Choices
