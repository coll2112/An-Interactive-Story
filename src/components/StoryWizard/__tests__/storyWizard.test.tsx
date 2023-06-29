import { render, screen } from '@testing-library/react'
import { StoryWizard } from '~components/StoryWizard'

describe('StoryWizard', () => {
  it('should render correctly', () => {
    render(<StoryWizard />)
    expect(screen.getByText(/start coding/i)).toBeInTheDocument()
  })
})
