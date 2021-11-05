import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '75px', margin: '15px auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 'bold' }} gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Service;