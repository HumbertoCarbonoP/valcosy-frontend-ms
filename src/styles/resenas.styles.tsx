import { makeStyles } from "@mui/styles";

const ResenasStyles = makeStyles(() => ({
    mainContainer: {
        marginTop: '150px',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        border: 'none',
        backgroundColor: '#F4F4F4',
        width: '200px',
        fontSize: '17px',
        fontWeight: '200',
        padding: '20px',
        borderRadius: '35px',
        cursor: 'pointer'
    },
    title: {
        color: '#000000',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '20px'
    },
    scoreImg: {
        width: '50%',
        marginBottom: '40px'
    },
    commentsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: '40px'
    },
    commentImg: {
        width: '70%',
        borderRadius: '35px'
    }
}));

export default ResenasStyles;