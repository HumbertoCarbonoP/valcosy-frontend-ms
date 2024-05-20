import useStyles from '../styles/contacto.styles'
import Head from "next/head";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";
import { useForm } from 'react-hook-form';
import { Snackbar } from '@mui/material';
import { useState } from 'react';

export default function Contacto() {
    const classes = useStyles();
    const { register, handleSubmit, reset } = useForm();
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleClose = () => {
        setOpenSnackBar(false);
    };

    const onSubmit = (data: any) => {
        setOpenSnackBar(true);
        reset();
    }

    return (
        <>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={4000}
                onClose={handleClose}
                message="Correo enviado exitosamente..."
            />
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
                <Header menuDefault={5} />
            </header>
            <main className={classes.mainContainer}>
                <form className={classes.formContainer} onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <h2 className={classes.title}>Contáctanos</h2>
                    <h3 className={classes.subtitle}>Estamos para ti</h3>
                    <p className={classes.paragraph}>En el Hotel Valcosy nos tomamos muy en serio a nuestros clientes. Si tiene alguna consulta, queja o petición, le pedimos que lo reenvie a nuestro servicio de soporte y nos comunicaremos con usted lo antes posible.</p>
                    <div className={classes.form}>
                        <div className={classes.rows}>
                            <div className={classes.itemContainer}>
                                <label className={classes.lable} htmlFor="email">Email *</label>
                                <input className={classes.textInput} {...register('email')} id='email' required />
                            </div>
                            <div className={classes.itemContainer}>
                                <label className={classes.lable} htmlFor="topic">Asunto *</label>
                                <input className={classes.textInput} {...register('topic')} id='topic' required />
                            </div>
                        </div>
                        <div className={classes.itemAddressContainer}>
                            <label className={classes.lable} htmlFor="message">Mensaje *</label>
                            <textarea className={classes.textInput} style={{ height: '200px', padding: '20px' }} {...register('message')} id='message' required />
                        </div>
                    </div>
                    <input type="submit" value="Enviar" className={classes.button} />
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}