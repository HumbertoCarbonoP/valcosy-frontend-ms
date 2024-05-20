import useStyles from '../styles/reservas.styles'
import Head from "next/head";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";
import Booking from '@/components/organisms/Booking/Booking';
import BookingResume from '@/components/molecules/RoomResume/BookingResume';

export default function Reservas() {
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
            <header>
                <Header menuDefault={3} />
            </header>
            <main className={classes.mainContainer}>
                <Booking />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
        // <div className={classes.habitacionesContainer}>
        //     <Tabs menuDefault={3}/>
        //     <h1>Reservas</h1>
        // </div>
    );
}