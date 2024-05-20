import Link from 'next/link';
import useStyles from './Footer.styles'

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <img src="/valcosyIcon.png" alt="Logo de Hotel Valcosy" className={classes.logo} />
            <div>
                <h3 className={classes.title}>Dirección</h3>
                <p className={classes.subtitle}>Calle 18, avenida #no 17 - 23</p>
            </div>
            <div>
                <h3 className={classes.title}>Redes</h3>
                <ul className={classes.list}>
                    <li className={classes.subtitle}>
                        <img src="/instagramIcon.png" alt="Instagram icon" className={classes.icon} />
                        @valcosyhotel
                    </li>
                    <li className={classes.subtitle}>
                        <img src="/whatsAppIcon.png" alt="WhatsApp icon" className={classes.icon} />
                        +57 3218369975
                    </li>
                </ul>
            </div>
            <Link href='/contacto' className={classes.title}>Contáctanos</Link>
            <Link href='/contacto' className={classes.title}>Sobre Nosotros</Link>
        </div>
    );
}