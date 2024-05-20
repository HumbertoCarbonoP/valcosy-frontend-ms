import Link from 'next/link';
import useStyles from './BookingResume.styles'

export default function BookingResume() {
    const classes = useStyles();

    return (
        <div className={classes.bookingResumeContainer}>
            <div className={classes.description}>
                <div className={classes.imgContainer} style={{ backgroundImage: 'url("/rooms/1.jpeg")' }}></div>
                <h3>Habitación Interna</h3>
            </div>
            <Link href="/" className={classes.link}>Cambiar selección</Link>
            <p className={classes.total}>Total: <span className={classes.price}>COP $90.000</span></p>
        </div>
    );
}