import { makeStyles } from "@mui/styles";

const ContactoStyles = makeStyles(() => ({
    mainContainer: {
        marginTop: '150px',
        marginBottom: '50px',
    },
    formContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        height: "100%",
        backgroundColor: "#EAEAEA",
        borderRadius: "35px",
        padding: "20px",
    },
    rows: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: "15px",
    },
    itemContainer: {
        display: "flex",
        flexDirection: "column",
        width: "45%",
    },
    lable: {
        fontWeight: "600",
        fontSize: "18px",
        marginLeft: "10px"
    },
    textInput: {
        border: "none",
        fontSize: "18px",
        height: "40px",
        borderRadius: "35px",
        outline: "none",
        paddingLeft: "20px",
        color: "#8B8C8E"
    },
    itemAddressContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "15px",
    },
    button: {
        borderRadius: '35px',
        border: 'none',
        backgroundColor: '#8B8C8E',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '20px',
        width: '220px',
        height: '45px',
        marginTop: '15px',
        cursor: 'pointer'
    },
    paragraph:{
        width: '70%',
        marginBottom: '20px'
    },
    title: {
        fontWeight: "600",
        fontSize: "40px",
        marginBottom: "20px",
    },
    subtitle: {
        fontWeight: "600",
        fontSize: "30px",
        marginBottom: "10px",
        width: "70%",
    }
}));

export default ContactoStyles;