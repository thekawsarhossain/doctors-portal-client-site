import { Container, Grid, Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/footer-bg.png';

const footerBg = {
    background: `url(${bg}) no-repeat `,
    backgroundSize: 'cover'
}

const Footer = () => {
    return (
        <Box style={footerBg}>
            <Container sx={{ py: 10, textAlign: 'left' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <List sx={{ pt: 6 }}>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Emargency Dental Care</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Treatment of Personal Diseases</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Tooth Extraction</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ color: 'primary.main', px: 1.5 }} variant="h6">Services</Typography>
                        <List >
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Emargency Dental Care</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Treatment of Personal Diseases</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Tooth Extraction</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ color: 'primary.main', px: 1.5 }} variant="h6">Oral Health</Typography>
                        <List >
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Emargency Dental Care</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Treatment of Personal Diseases</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Tooth Extraction</Link></ListItem>
                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>                            <ListItem><Link style={{ textDecoration: 'none' }} to="/">Check Up</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ color: 'primary.main', px: 1.5 }} variant="h6">Our Address</Typography>
                        <List>
                            <ListItem>New Work - 101010 Hudson yards</ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;