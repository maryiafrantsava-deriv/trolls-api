import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/common/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
