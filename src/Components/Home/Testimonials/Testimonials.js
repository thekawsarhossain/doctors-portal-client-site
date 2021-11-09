import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Testimonial from './Testimonial/Testimonial';

const testimonials = [
    {
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, neque dolor? Vitae, ratione sit? Officia ad labore dolor sit, amet consectetur adipisicing elit',
        name: 'Korim Uddin',
        city: 'Bangladesh',
        img: 'https://i.ibb.co/DWjzYJH/people-1.png'
    },
    {
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, neque dolor? Vitae, ratione sit? Officia ad labore dolor sit, amet consectetur adipisicing elit',
        name: 'Rohima Begum',
        city: 'Pakistan',
        img: 'https://i.ibb.co/Khp0mMn/people-2.png'
    },
    {
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, neque dolor? Vitae, ratione sit? Officia ad labore dolor sit, amet consectetur adipisicing elit',
        name: 'Korima Begum',
        city: 'India',
        img: 'https://i.ibb.co/rf5xT2k/people-3.png'
    }
]

const Testimonials = () => {
    return (
        <Container sx={{ py: 12 }}>
            <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>TESTIMONIALS</Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>What's our patients <br /> Says</Typography>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    {
                        testimonials.map(testimonial => <Testimonial
                            key={testimonial.name}
                            testimonials={testimonial}
                        ></Testimonial>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;