import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/common/Header/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Deriv.com API</title>
        <meta name="description" content="Build your own trading platform, powered by the Deriv API. We use WebSockets for fast, two-way messaging between your apps and our trading services." />
        <link rel="icon" href="/deriv.png" />
      </Head>
   <Header/>
      
    </div>
  )
}

export default Home
