import GameOptionsProvider from '~/contexts/game-options'
import StoryWizard from '~components/StoryWizard'

const Game = () => (
  <GameOptionsProvider>
    <StoryWizard />
  </GameOptionsProvider>
)

export default Game
