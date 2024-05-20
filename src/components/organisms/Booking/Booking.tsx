import BookingForm from "@/components/molecules/BookingForm/BookingForm";
import BookingResume from "@/components/molecules/RoomResume/BookingResume";
import useStyles from './Booking.styles'

export default function Booking() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <BookingResume />
            <BookingForm />
        </div>
    );
}