import React from 'react';
import { Grid, Typography, Card, Box, CardContent } from '@mui/material';

const Testimonial = ({ testimonials }) => {
    const { name, message, city, img } = testimonials;
    return (
        <Grid item md={4} sx={{ mt: 6 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        {message}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 3 }}>
                    <img src={img} alt="" />
                    <Box sx={{ px: 2, textAlign: 'left' }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="overline" component="div">
                            {city}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default Testimonial;