import { makeStyles } from "@mui/styles";

const FilterStyles = makeStyles(() => ({
    filterContainer: {
        display: "flex",
        alignItems: 'center',
        backgroundColor: '#8B8C8E',
        width: '705px',
        height: '50px',
        borderRadius: '50px',
        marginBottom: '40px'
    },
    icon: {
        height: '20px',
        marginRight: '5px'
    }
}));

export default FilterStyles;