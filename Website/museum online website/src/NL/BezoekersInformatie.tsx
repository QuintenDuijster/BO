import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/BezoekersInformatie.css';

const BezoekersInformatie: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | BezoekersInformatie';
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

export default BezoekersInformatie;