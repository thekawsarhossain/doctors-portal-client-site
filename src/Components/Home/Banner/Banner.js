import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import Container from '@mui/material/Container';

const bannerBg = {
    background: `url(${bg}) no-repeat `,
    backgroundSize: 'cover'
}

const Banner = () => {
    return (
        <Box style={bannerBg}>
            <Container sx={{ flexGrow: 1, pt: 15, pb: 24 }}>
                <Grid container spacing={2}>
                    <Grid item xs={5} sx={{ textAlign: 'left ' }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 3 }} variant="h3">Your New Smile <br /> Starts Here </Typography>
                        <Typography variant="p" sx={{ color: 'text.secondary' }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorum. Quam totam blanditiis voluptate praesentium accusamus eos labore corporis excepturi. </Typography>
                        <Button sx={{ my: 5, py: 1 }} variant="contained">get appointment</Button>
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

export default Banner;