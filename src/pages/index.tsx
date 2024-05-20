import Head from 'next/head'
import useStyles from '../styles/index.styles'
import Hero from '@/components/molecules/Hero/Hero';
import Footer from '@/components/molecules/Footer/Footer';
import BookNow from '@/components/organisms/BookNow/BookNow';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Hotel Valcosy</title>
        <meta name="description" content="Web application for Valcosy Hotel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Cormorant' rel='stylesheet' />
        <link rel="icon" href="/valcosyIcon.png" />
        <link rel="stylesheet" href=".../styles/global.css" />
      </Head>
      <main className={classes.main}>
        <Hero />
        <BookNow />
        <Footer />
      </main>
    </>
  )
}
