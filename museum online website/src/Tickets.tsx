import React, { useEffect } from 'react';
import './css/Tickets.css';
import './Herbruikbaar/pageStyle.css';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';


const Tickets: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Tickets';
    }, []);

    return (
        <div className="Tickets">
            <Header />
            <h1> sup</h1>
            <Footer />
        </div>
    );
};

export default Tickets;