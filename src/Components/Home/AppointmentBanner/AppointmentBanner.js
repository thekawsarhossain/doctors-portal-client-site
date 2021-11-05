import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bg}) no-repeat center`,
    marginTop: 150,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <img style={{ width: "100%", marginTop: '-145px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>APPOINMNET</Typography>
                        <Typography variant="h3" style={{ color: '#fff' }} sx={{ fontWeight: "bold", mb: 2 }}>Make an appoinment <br /> Today</Typography>
                        <Typography variant="p" style={{ color: '#fff' }} sx={{ mb: 2, }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorum. Quam totam blanditiis voluptate praesentium accusamus eos labore corporis excepturi. </Typography> <br />
                        <Button sx={{ my: 4 }} variant="contained">learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;