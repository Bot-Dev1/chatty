import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chatty-bot!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome To the site :D!" />
        <p className="description">
          Welcome To the site <code>pages/Index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
