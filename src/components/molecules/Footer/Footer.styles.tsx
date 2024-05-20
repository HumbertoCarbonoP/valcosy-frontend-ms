import { makeStyles } from "@mui/styles";

const FooterStyles = makeStyles(() => ({
    footerContainer: {
        backgroundColor: '#8B8C8E',
        height: '160px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    logo: {
        width: '160px',
        height: '160px'
    },
    title: {
        textDecoration: 'none',
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: "20px",
    },
    list: {
        listStyleType: 'none',
    },
    subtitle: {
        color: '#FFFFFF',
        fontWeight: '300',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0'
    },
    icon: {
        height: '30px',
        width: '30px',
        marginRight: '8px',
    }
}));

export default FooterStyles;