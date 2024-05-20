import { makeStyles } from "@mui/styles";

const DatePickerStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
        marginRight: '20px',
        cursor: 'pointer',
        width: '288px',
    },
    text: {
        color: "#FFFFFF",
        fontSize: "18px",
        fontWeight: "600",
        marginLeft: "5px",
    },
    hideRange: {
        '& .rdrDefinedRangesWrapper': {
            display: 'none',
        },
    },
    icon: {
        height: '20px'
    }
}));

export default DatePickerStyles;