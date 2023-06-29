import GameOptionsProvider from '~/contexts/game-options'
import OptionsOverlay from '~components/OptionsOverlay'
import StoryWizard from '~components/StoryWizard'

const Game = () => (
  <GameOptionsProvider>
    <OptionsOverlay />
    <StoryWizard />
  </GameOptionsProvider>
)

export default Game
