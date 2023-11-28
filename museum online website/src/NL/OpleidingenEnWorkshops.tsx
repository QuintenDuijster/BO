import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/OpleidingenEnWorkshops.css';

const OpleidingenEnWorkshops: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | OpleidingenEnWorkshops';
    }, []);

    return (
        <>
            <Header />

            <main>

            </main>

            <Footer />
        </>
    );
};

export default OpleidingenEnWorkshops;