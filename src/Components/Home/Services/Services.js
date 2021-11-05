import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import Service from './Service/Service';
import Typography from '@mui/material/Typography';


// services fake data here 
const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, neque dolor? Vitae, ratione sit? Officia ad labore ',
        img: Fluoride,
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, neque dolor? Vitae, ratione sit? Officia ad labore impedit ',
        img: Cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, neque dolor? Vitae, ratione sit? Officia ad labore impedit',
        img: Whitening
    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 6 }}>
            <Container>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>OUR SERVICES</Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>Services We Provide</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service, index) => <Service
                            key={index}
                            service={service}
                        />)
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Services;