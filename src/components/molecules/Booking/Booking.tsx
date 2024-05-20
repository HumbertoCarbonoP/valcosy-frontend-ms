import BookingForm from "@/components/molecules/BookingForm/BookingForm";
import BookingResume from "@/components/molecules/RoomResume/BookingResume";

export default function Booking() {
    return (
        <div>
            <BookingResume />
            <BookingForm />
        </div>
    );
}