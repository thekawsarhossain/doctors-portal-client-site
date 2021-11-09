import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import Container from '@mui/material/Container';
import Calendar from '../../Shared/Calendar/Calendar';

const bannerBg = {
    background: `url(${bg}) no-repeat `,
    backgroundSize: 'cover'
}
const AppointmentHeader = ({ value, setValue }) => {
    return (
        <Box style={bannerBg}>
            <Container sx={{ flexGrow: 1, py: 14 }}>
                <Grid container spacing={2}>
                    <Grid item xs={5} sx={{ textAlign: 'left ' }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 3 }} variant="h3">Appointment</Typography>
                        <Calendar value={value} setValue={setValue} />
                    </Grid>
                    <Grid item xs={7}>
                        <Box sx={{ textAlign: 'left' }
                        } >
                            <img style={{ width: '100%', padding: 15 }} src={chair} alt="" />
                        </Box>
                    </Grid>
                </Grid >
            </Container >
        </Box>
    );
};

export default AppointmentHeader;