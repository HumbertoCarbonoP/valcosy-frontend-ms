import Link from 'next/link';
import useStyles from './RoomCard.styles'

interface props {
    id: number;
    title: string;
    features: string[];
    capacity: number;
    price: string;
}

export default function RoomCard({ id, title, features, capacity, price }: props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.imageContainer} style={{ backgroundImage: `url("/rooms/${id}.jpeg")` }}>
            </div>
            <div className={classes.description}>
                <h1 className={classes.title}>{title}</h1>
                <ul>
                    {features.map(feature => <li className={classes.feature}>- {feature}</li>)}
                </ul>
            </div>
            <div className={classes.bookContainer}>
                <p className={classes.capacity}>Capacidad: {capacity} personas</p>
                <div className={classes.priceContainer}>
                    <p className={classes.price}>COP</p>
                    <p className={classes.price}>${price}</p>
                    <Link href='/reservas'>
                        <button className={classes.button}>Reservar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}