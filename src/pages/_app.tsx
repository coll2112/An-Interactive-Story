import ChapterProvider from '~/contexts/chapter'
import GameOptionsProvider from '~/contexts/game-options'
import Layout from '~layout/layout'

// import global styles
import '~styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChapterProvider>
      <GameOptionsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GameOptionsProvider>
    </ChapterProvider>
  )
}

export default MyApp
