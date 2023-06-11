import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import PriceLive from '../components/PriceLive'
import LastBets from '../components/LastBets'
import HowItWork from '../components/HowItWork'
import Tick from '../components/Tick'


export default function Home() {
  return (
    <div className="relative max-w-[100vw]">
      <Head>
        <title>SnowBet | Options Trading Platform</title>
        <link rel="icon" href="/fav.ico" />
        <meta name='description' content='SnowBet is an Options Trading Platform on Polygon.' />
        <link rel="canonical" href="https://snowbet.io/" />
        <meta name="robots" content="follow, index" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SnowBet | Options Trading Platform" />
        <meta property="og:description" content="SnowBet is an Options Trading Platform on Polygon." />
        <meta property="og:url" content="https://snowbet.io/" />
        <meta property="og:image" content="https://snowbet.io/assets/og.jpg" />
      </Head>
      <Navbar />
      <Intro />
      <PriceLive />
      <LastBets />
      <HowItWork />
      <Tick />
      <Footer />
    </div>
  )
}
