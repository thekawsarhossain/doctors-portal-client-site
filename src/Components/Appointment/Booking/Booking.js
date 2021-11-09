import React from 'react';
import Grid from '@mui/material/Grid'
import { Paper, Typography, Button } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Grid item md={4} sx={{ my: 2 }}>
                <Paper sx={{ p: 4 }} elevation={4} >
                    <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>{name}</Typography>
                    <Typography variant="p" sx={{ fontWeight: 'bold', display: 'block', py: 1 }}>{time}</Typography>
                    <Typography variant="caption">{space} SPACES AVILABLE</Typography>
                    <Button onClick={handleOpen} variant="contained" sx={{ my: 2 }}>Book appointment</Button>
                </Paper>
            </Grid>
            <BookingModal handleClose={handleClose} open={open} booking={booking} date={date} />
        </>
    );
};

export default Booking;