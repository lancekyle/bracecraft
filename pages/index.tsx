import Head from 'next/head'
import Header from '../client/src/components/Header'
import Hero from '../client/src/components/Hero'
import Footer from '../client/src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>BraceCraft - Athletic Injury Prevention & Recovery Authority</title>
        <meta name="description" content="Expert athletic injury prevention and recovery guidance. Don't let injury sideline your goals with BraceCraft's comprehensive injury guides and exercise videos." />
        <meta property="og:title" content="BraceCraft - Athletic Injury Prevention & Recovery Authority" />
        <meta property="og:description" content="Expert athletic injury prevention and recovery guidance. Don't let injury sideline your goals with BraceCraft's comprehensive injury guides and exercise videos." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://staging.bracecraft.com/" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  )
}