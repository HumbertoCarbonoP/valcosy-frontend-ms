import Tabs from "@/components/molecules/Tabs/Tabs";
import useStyles from '../styles/habitaciones.styles'
import Head from "next/head";

export default function Habitaciones() {
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
            <div className={classes.habitacionesContainer}>
                <Tabs menuDefault={2} />
                <h1>Habitaciones</h1>
            </div>
        </>
    );
}