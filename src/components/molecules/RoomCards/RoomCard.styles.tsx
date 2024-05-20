import { makeStyles } from "@mui/styles";

const RoomCardSyles = makeStyles(() => ({
    container: {
        width: '850px',
        display: 'flex',
        backgroundColor: '#F4F4F4',
        borderRadius: '35px',
        padding: '20px',
        justifyContent: 'space-between',
        boxShadow: '4px 4px 5px 4px #00000040',
        marginBottom: '20px'
    },
    imageContainer: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '250px',
        width: '300px',
        borderRadius: '35px'
    },
    description: {
        textAlign: 'left',
        width: '302px',
    },
    title: {
        fontWeight: '600',
        fontSize: '20px',
        marginBottom: '10px',
    },
    feature: {
        fontWeight: '200',
        fontSize: '18px',
        listStyle: 'none'
    },
    bookContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'space-evenly',
    },
    capacity: {
        fontWeight: '200',
        fontSize: '16px',
        color: '#8B8C8E'
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    price: {
        fontWeight: '600',
        fontSize: '20px'
    },
    button: {
        borderRadius: '35px',
        border: 'none',
        backgroundColor: '#8B8C8E',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '20px',
        width: '150px',
        height: '40px',
        marginTop: '10px',
        cursor: 'pointer'
    }
}));

export default RoomCardSyles;