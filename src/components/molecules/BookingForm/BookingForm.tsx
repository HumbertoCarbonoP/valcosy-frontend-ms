import { useState } from 'react';
import useStyles from './BookingForm.styles';
import { useForm } from 'react-hook-form';
import { Padding } from '@mui/icons-material';
import { Snackbar } from '@mui/material';

export default function BookingForm() {
    const classes = useStyles();
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState('');
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleClose = () => {
        setOpenSnackBar(false);
    };

    const handleOnSubmit = () => {
        setOpenSnackBar(true);
        reset();
    };

    return (
        <>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={4000}
                onClose={handleClose}
                message="Habitación reservada exitosamente..."
            />
            <form className={classes.formContainer} onSubmit={handleSubmit((data) => handleOnSubmit())}>
                <div className={classes.form}>
                    <h2>Introduce tus datos</h2>
                    <div className={classes.rows}>
                        <div className={classes.itemContainer}>
                            <label className={classes.lable} htmlFor="name">Nombre *</label>
                            <input className={classes.textInput} {...register('name')} id='name' required />
                        </div>
                        <div className={classes.itemContainer}>
                            <label className={classes.lable} htmlFor="lastName">Apellidos *</label>
                            <input className={classes.textInput} {...register('lastName')} id='lastName' required />
                        </div>
                    </div>
                    <div className={classes.itemAddressContainer}>
                        <label className={classes.lable} htmlFor="address">Dirección *</label>
                        <input className={classes.textInput} {...register('address')} id='address' required />
                    </div>
                    <div className={classes.rows}>
                        <div className={classes.itemContainer}>
                            <label className={classes.lable} htmlFor="id">Identificación</label>
                            <div className={classes.doubleCell}>
                                <select className={classes.smallInput} {...register('idType')} id="idType" required>
                                    <option value="cc">CC</option>
                                    <option value="ce">CE</option>
                                    <option value="ti">TI</option>
                                    <option value="passport">PPT</option>
                                    <option value="dni">DNI</option>
                                </select>
                                <input className={classes.textInput} style={{ width: '65%' }}{...register('id')} id='id' required />
                            </div>
                        </div>
                        <div className={classes.itemContainer}>
                            <label className={classes.lable} htmlFor="cellphone">Celular *</label>
                            <div className={classes.doubleCell}>
                                <input {...register('prefix')} id='prefix' value='+57' className={classes.smallInput} style={{ width: '20%' }} required />
                                <input className={classes.textInput} style={{ width: '65%' }} {...register('cellphone')} id='cellphone' required />
                            </div>
                        </div>
                    </div>
                    <div className={classes.rows}>
                        <div className={classes.itemContainer}>
                            <label className={classes.lable} htmlFor="birthday">Fecha de Nacimiento *</label>
                            <input {...register('birthday')} type="date" id='birthday' className={classes.textInput} style={{ paddingRight: '40px' }} required />
                        </div>
                        <div className={classes.itemContainer}>
                            <label className={classes.lable} htmlFor="email">Email *</label>
                            <input className={classes.textInput} {...register('email')} id='email' required />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Reserva ahora" className={classes.button} />
            </form>
        </>
    );
}