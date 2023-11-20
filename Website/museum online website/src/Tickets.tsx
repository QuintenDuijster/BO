import React from 'react';
import './Tickets.css';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';


const Tickets: React.FC = () =>
{
    return (
        <div className="Tickets">
            <Header />

            <Footer />
        </div>
    );
};

export default Tickets;