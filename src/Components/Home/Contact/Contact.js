import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import bg from '../../../images/appointment-bg.png';

const bgImg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    return (
        <Box style={bgImg} sx={{ my: 6 }}>
            <Container>
                <Box sx={{ py: 6 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>CONTACT US</Typography>
                    <Typography variant="h3" style={{ color: '#fff' }} sx={{ fontWeight: "bold", mb: 2 }}>Always Connect with us</Typography>
                </Box>
                <Box sx={{ pb: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <TextField style={{ backgroundColor: '#fff' }} sx={{ width: '75%' }} id="outlined-basic" label="Email Address" variant="outlined" />
                    <TextField style={{ backgroundColor: '#fff' }} sx={{ my: 3, width: '75%' }} id="outlined-basic" label="Subject" variant="outlined" />
                    <TextField
                        style={{ backgroundColor: '#fff' }}
                        sx={{ width: '75%' }}
                        id="outlined-multiline-static"
                        label="Your Message"
                        multiline
                        rows={4}
                    />
                    <Button sx={{ px: 8, py: 1, my: 3 }} variant="contained">submit</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;