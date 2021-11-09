import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import About from './About/About';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Cards />
            <Services />
            <About />
            <AppointmentBanner />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;