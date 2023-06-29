import GameOptionsProvider from '~/contexts/game-options'
import { OptionsOverlay } from '~components/OptionsOverlay'
import { TitleScreen } from '~components/TitleScreen'

const Title = () => (
  <GameOptionsProvider>
    <OptionsOverlay />
    <TitleScreen />
  </GameOptionsProvider>
)

export default Title
