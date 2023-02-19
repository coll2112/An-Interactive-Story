import { FunctionComponent } from 'react'
import { Choice as ChoiceType } from '~/types/story'
import Button from '~components/Base/Button'

interface ChoiceProps {
  choice: ChoiceType
  onClick(): void
}

const Choice: FunctionComponent<ChoiceProps> = ({ choice, onClick }) => (
  <Button onClick={onClick}>{choice.text}</Button>
)

export default Choice
