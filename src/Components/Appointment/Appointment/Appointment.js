import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <div>
            <Navigation />
            <AppointmentHeader value={value} setValue={setValue} />
            <AvailableAppointments value={value} setValue={setValue} />
            <Footer />
        </div>
    );
};

export default Appointment;