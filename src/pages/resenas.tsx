import Tabs from "@/components/molecules/Tabs/Tabs";
import useStyles from '../styles/resenas.styles'
import Head from "next/head";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";

export default function Resenas() {
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
                <Header menuDefault={4} />
            </header>
            <main className={classes.mainContainer}>
                <h1 className={classes.title}>Reseñas</h1>
                <img src="/score.jpeg" alt="Puntuación del hotel" className={classes.scoreImg}/>
                <h2 className={classes.title}>Comentarios</h2>
                <div className={classes.commentsContainer}>
                    <img src="/comments.jpeg" alt="Comentario" className={classes.commentImg} />
                    <button className={classes.button}>Agregar una nueva reseña</button>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
        // <div className={classes.habitacionesContainer}>
        //     <Tabs menuDefault={4}/>
        //     <h1>Reseñas</h1>
        // </div>
    );
}