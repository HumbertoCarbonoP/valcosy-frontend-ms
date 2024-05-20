import Link from 'next/link';
import useStyles from './Tab.styles'

interface props {
    name: string,
    link: string,
    setMenu: (menu: number) => void,
    menu: number,
    active: boolean
}
export default function Tab({ name, link, setMenu, menu, active }: props ){
    const classes = useStyles();
    return (
        <Link href={link} className={classes.tab} onClick={() => setMenu(menu)} style={active ? { textDecoration: 'underline', textDecorationColor: '#FFFFFF', textDecorationThickness: '1.5px'} : {}}>{name}</Link>
    );
}