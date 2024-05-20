import Tabs from '../Tabs/Tabs';
import useStyles from './Hero.styles'

export default function Hero() {
    const classes = useStyles();

    return (
            <div className={classes.heroContainer}>
                <div className={classes.filterLayer}></div>
                <Tabs menuDefault={1}/>
                <div className={classes.textContainer}>
                    <h2 className={classes.title}>Bienvenidos a</h2>
                    <h1 className={classes.mainTitle}>VALCOSY</h1>
                    <h3 className={classes.subtitle}>La estancia perfecta para vivir momentos memorables</h3>
                </div>
            </div>
    );
}