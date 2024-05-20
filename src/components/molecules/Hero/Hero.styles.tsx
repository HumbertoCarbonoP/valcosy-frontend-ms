import { makeStyles } from "@mui/styles";

const HeroStyles = makeStyles(() => ({
    heroContainer: {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/hero.jpeg')",
        backgroundSize: "cover",
        position: "sticky",
        backgroundPosition: 'center',
    },
    filterLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "40px",
        height: "calc(100vh - 80px)",
        zIndex: 2
    },

    subtitle: {
        fontFamily: "Cormorant",
        fontWeight: "300",
        fontSize: "30px",
        color: "#FFFFFF"
    },

    title: {
        fontFamily: "Cormorant",
        fontWeight: "500",
        fontSize: "60px",
        color: "#FFFFFF"
    },

    mainTitle: {
        fontFamily: "Cormorant",
        color: "#FFFFFF",
        fontSize: "90px",
        fontWeight: "500",
    }
}));

export default HeroStyles;