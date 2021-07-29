import Head from 'next/head'
import Image from 'next/image'
import Button from '@material-ui/core/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giotto Tarot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Giotto Tarot</h1>
        <h2> enter your question to the cards: </h2>
        <input type="text"/>
        <Button variant="contained" className={styles.prettybutton}>Reveal My Fate</Button>
      </main>
    </div>
  )
}
