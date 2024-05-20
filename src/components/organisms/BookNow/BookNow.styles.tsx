import { makeStyles } from "@mui/styles";

const BookNowStyles = makeStyles(() => ({
    bookNowContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: '40px',
        fontWeight: '600',
        marginBottom: '20px',
        marginTop: '40px',
    },
    subtitle: {
        fontSize: '30px',
        fontWeight: '600',
        marginBottom: '20px',
    }
}));

export default BookNowStyles;