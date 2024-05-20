import Filter from '@/components/molecules/Filter/Filter';
import useStyles from './BookNow.styles'
import RoomCard from '@/components/molecules/RoomCards/RoomCard';
import { idText } from 'typescript';
import { useEffect, useState } from 'react';

export default function BookNow() {
    const classes = useStyles();
    const [rooms, setRooms] = useState<{ id: number; name: string; features: string[]; capacity: number; price: string; }[]>([]);

    const getAvailableRooms = async (startDate?: string, endDate?: string, adults?: number, children?: number) => {
        if (!startDate || !endDate || !adults || !children){
            try {
                console.log("Consulta default", startDate, endDate, adults, children);
                const response = await fetch('https://7ca245d858a64476844e1b765bb047bd.api.mockbin.io/');
                const json = await response.json();
                setRooms(json.data.rooms ? json.data.rooms : []);
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                console.log("Consulta personalizada");
                const response = await fetch('https://038b1acb27764441ab205660254da379.api.mockbin.io/'); //---------------------------------------
                const json = await response.json();
                setRooms(json.data.rooms ? json.data.rooms : []);
            } catch (e) {
                console.error(e);
            }
        }
    }

    useEffect(() =>{
        getAvailableRooms();
    }, []);

    return (
        <div className={classes.bookNowContainer}>
            <h1 className={classes.title}>Reserva ahora</h1>
            <Filter getAvailableRooms={getAvailableRooms}/>
            <h2 className={classes.subtitle}>Habitaciones disponibles</h2>
            {rooms.map(room => 
                <RoomCard id={room.id} title={room.name} features={room.features} capacity={room.capacity} price={room.price} />
            )}
        </div>
    );
}