import { makeStyles } from "@mui/styles";

const HeaderStyles = makeStyles(() => ({
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        backgroundImage: "url('/hero.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        width: "100%",
        left: 0,
        top: 0,
        position: 'fixed'
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
    logo: {
        height: "150px",
        zIndex: 2,
    }
}));

export default HeaderStyles;