import Head from 'next/head'
import TitleScreen from '~components/TitleScreen'

const Home = () => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
        rel="stylesheet"
      />
    </Head>
    <TitleScreen />
  </>
)

export default Home
