import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Cards = () => {
    return (
        <Container sx={{ mt: -14 }}>
            <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                <Grid item xs={4}>
                    <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: 'primary.main', p: 3 }} style={{ color: 'white' }}>
                        <AccessTimeIcon sx={{ fontSize: 80, p: 2 }} />
                        <Box>
                            <Typography variant="h6">Opening Hours</Typography>
                            <Typography variant="p">Lorem ipsum dolor sit amet. Lorem .</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: 'text.primary', p: 3 }} style={{ color: 'white' }}>
                        <LocationOnIcon sx={{ fontSize: 80, p: 2 }} />
                        <Box>
                            <Typography variant="h6">Visit our location</Typography>
                            <Typography variant="p">Lorem ipsum dolor sit amet. Lorem .</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: 'primary.main', p: 3 }} style={{ color: 'white' }}>
                        <PhoneInTalkIcon sx={{ fontSize: 80, p: 2 }} />
                        <Box>
                            <Typography variant="h6">Contact us now</Typography>
                            <Typography variant="p">Lorem ipsum dolor sit amet. Lorem .</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid >
        </Container>
    );
};

export default Cards;