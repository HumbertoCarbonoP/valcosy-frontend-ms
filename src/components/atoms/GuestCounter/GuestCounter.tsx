import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import useStyles from './GuestCounter.styles';

interface props {
  label: string;
  setCounter: (value: number) => void;
}

const GuestCounter = ({ label, setCounter }: props) => {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <TextField
        size="small"
        inputProps={{ style: { textAlign: 'center', color: '#FFFFFF', fontWeight: '600', fontSize: '18px' } }}
        value={count}
        onChange={(e: any) => {
          setCount(Number(e.target.value));
          setCounter(Number(e.target.value));
        }}
        type="number"
        sx={{
          width: '60px',
          '& .MuiOutlinedInput-root': {
            border: 'none', 
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            }
          }
        }}
      />
    </div>
  );
};

export default GuestCounter;
