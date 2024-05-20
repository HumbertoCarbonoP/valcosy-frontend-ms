import Tabs from '../Tabs/Tabs';
import useStyles from './Header.styles'

interface props {
    menuDefault: number;
}

export default function Header({ menuDefault }: props) {
    const classes = useStyles();
    return (
        <div className={classes.headerContainer}>
            <div className={classes.filterLayer}></div>
            <img src="/valcosyIcon.png" alt="Logo Valcosy" className={classes.logo} />
            <Tabs menuDefault={menuDefault} />
        </div>
    );
}