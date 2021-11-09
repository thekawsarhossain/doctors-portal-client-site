import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, TextField, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const BookingModal = ({ handleClose, open, booking, date }) => {
    const { name, time } = booking;

    // handle form here 
    const handleBookingSubmit = event => {
        console.log('added')
        event.preventDefault();
        handleClose();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography variant="p" sx={{ fontWeight: 'bold', color: 'primary.main', display: 'block', mb: 2 }}>{name}</Typography>
                    <TextField sx={{ width: '90%', my: 1 }} id="outlined-size-small" label="Time" variant="outlined" defaultValue={time} disabled />
                    <TextField sx={{ width: '90%', my: 1 }} id="outlined-size-small" label="Your Name" variant="outlined" />
                    <TextField sx={{ width: '90%', my: 1 }} id="outlined-size-small" label="Phone Number" variant="outlined" />
                    <TextField sx={{ width: '90%', my: 1 }} id="outlined-size-small" label="Your Email" variant="outlined" />
                    <TextField sx={{ width: '90%', my: 1 }} id="outlined-size-small" label="mm/dd/yy" variant="outlined" defaultValue={date.toDateString()} disabled />
                    <Button type="submit" sx={{ my: 2 }} onClick={handleBookingSubmit} variant="contained">send</Button>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;