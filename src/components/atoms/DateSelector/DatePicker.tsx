import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import useStyles from './DatePicker.styles';

interface props {
  setDisabledSearch: (value: boolean) => void;
  setParentStartDate: (value: string) => void;
  setParentEndDate: (value: string) => void;
}

export default function DatePicker({ setDisabledSearch, setParentStartDate, setParentEndDate }: props) {
  const classes = useStyles();
  const [openSelect, setOpenSelect] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [startDate, setStartDate] = useState('Fecha Llegada');
  const [endDate, setEndDate] = useState('Fecha Salida');

  const handleSelect = (ranges: any) => {
    setState([ranges.selection]);
    if (ranges.selection.startDate !== ranges.selection.endDate) {
      setOpenSelect(false);
      setStartDate(format(ranges.selection.startDate, 'dd/MM/yy'));
      setEndDate(format(ranges.selection.endDate, 'dd/MM/yy'));
      setDisabledSearch(false);
      setParentStartDate(format(ranges.selection.startDate, 'dd/MM/yy'));
      setParentEndDate(format(ranges.selection.endDate, 'dd/MM/yy'));
    }
  };

  return (
    <div>
      <div
        className={classes.container}
        onClick={() => setOpenSelect(true)}
      >
        <img src="/calendarIcon.png" alt="Ícono de calendario" className={classes.icon} />
        <p
          className={classes.text}>
          {startDate} - {endDate}
        </p>
      </div>
      <Dialog
        open={openSelect}
      >
        <div className={classes.hideRange}>
          <DateRangePicker
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            inputRanges={[]}
            staticRanges={[]}
          />
        </div>
      </Dialog>
    </div>
  );
}