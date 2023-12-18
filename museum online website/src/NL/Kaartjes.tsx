import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Kaartjes.css';

const Kaartjes: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Kaartjes';
    }, []);

    return (
        <>
            <Header />

            <main className="Kaartjes">

            </main>

            <Footer />
        </>
    );
};

export default Kaartjes;