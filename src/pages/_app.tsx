import ChapterProvider from '~/contexts/chapter'
import Layout from '~layout/layout'

// import global styles
import '~styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChapterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChapterProvider>
  )
}

export default MyApp
