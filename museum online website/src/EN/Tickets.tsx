import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Tickets.css';


const Tickets: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Tickets';
    }, []);

    return (
        <>
            <Header />

            <main className="Tickets">

            </main>

            <Footer />
        </>
    );
};

export default Tickets;