
import useStyles from './Filter.styles'
import GuestCounter from '@/components/atoms/GuestCounter/GuestCounter';
import DatePicker from '@/components/atoms/DateSelector/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/styles';
import { Button } from '@mui/material';
import { useState } from 'react';


const CustomButton = styled(Button)({
    backgroundColor: '#5a5a5a',
    color: 'white',
    padding: '6px 12px',
    textTransform: 'none',
    borderRadius: 20,
    boxShadow: 'none',
    fontWeight: '600',
    marginRight: '10px',
    marginLeft: '15px',
});

interface props {
    getAvailableRooms: (startDate?: string, endDate?: string, adults?: number, children?: number) => void;
}

export default function Filter({ getAvailableRooms }: props) {
    const classes = useStyles();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);
    const [disabledSearch, setDisabledSearch] = useState(true);

    return (
        <div className={classes.filterContainer}>
            <DatePicker setDisabledSearch={setDisabledSearch} setParentStartDate={setStartDate} setParentEndDate={setEndDate} />
            <img src="guestIcon.png" alt="Ícono de huesped" className={classes.icon} />
            <GuestCounter label='Adultos' setCounter={setAdults}/>
            <GuestCounter label='Niños' setCounter={setChildren}/>
            <CustomButton
                variant="contained"
                startIcon={<SearchIcon />}
                onClick={() => {
                    if (startDate && endDate) {
                        getAvailableRooms(startDate, endDate, adults, children);
                    }
                }}
                disabled={disabledSearch}
            >
                Buscar
            </CustomButton>
        </div>
    );
}