import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import kid from '../../../images/treatment.png';

const About = () => {
    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item md={5}>
                    <img style={{ width: '100%' }} src={kid} alt="" />
                </Grid>
                <Grid item md={7} sx={{ textAlign: 'left ' }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>Exceptional Dental <br /> Care, on Your Terms</Typography>
                    <Typography variant="p" sx={{ mb: 2, }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consectetur dignissimos aspernatur soluta sapiente! Pariatur, officiis, sit odit possimus fugit totam dolor enim quo fuga in accusamus aspernatur quas at delectus? Odio praesentium cum, unde recusandae a numquam corporis possimus deleniti in iusto itaque vel aperiam libero non. Culpa, fuga? </Typography> <br />
                    <Button sx={{ my: 4 }} variant="contained">learn more</Button>
                </Grid>
            </Grid>

        </Container>
    );
};

export default About;