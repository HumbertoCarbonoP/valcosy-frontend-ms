import { makeStyles } from "@mui/styles";

const BookingResumeStyles = makeStyles(() => ({
    bookingResumeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "20px",
    },
    imgContainer: {
        width: '200px',
        height: '200px',
        display: "flex",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "35px"
    },
    description: {
        width: "250px",
        height: "270px",
        backgroundColor: "#F4F4F4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "35px"
    },
    link: {
        color: '#000000',
        fontFamily: "Montserrat",
        fontWeight: "200",
        fontSize: "15px",
        margin: "10px 0"
    },
    total: {
        fontWeight: "600",
        fontSize: "20px"
    },
    price: {
        fontWeight: "200"
    }
}));

export default BookingResumeStyles;