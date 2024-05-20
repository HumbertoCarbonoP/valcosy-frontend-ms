import Tab from "@/components/atoms/Tab/Tab";
import useStyles from './Tabs.styles'
import { useState } from "react";

interface props {
    menuDefault: number;
}
export default function Tabs( { menuDefault }: props ){
    const [menu, setMenu] = useState(menuDefault);
    const classes = useStyles();
    return (
        <div className={classes.tabsContainer}>
            <Tab name="Inicio" link="/" setMenu={setMenu} menu={1} active={menu === 1 ? true : false} />
            {/* <Tab name="Habitaciones" link="/habitaciones" setMenu={setMenu} menu={2} active={menu === 2 ? true : false}/> */}
            {/* <Tab name="Reserva" link="/reservas" setMenu={setMenu} menu={3} active={menu === 3 ? true : false}/> */}
            <Tab name="Reseñas" link="/resenas" setMenu={setMenu} menu={4} active={menu === 4 ? true : false}/>
            <Tab name="Contáctanos" link="/contacto" setMenu={setMenu} menu={5} active={menu === 5 ? true : false}/>
        </div>
    );
}