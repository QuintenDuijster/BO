import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

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

            <main>

            </main>

            <Footer />
        </>
    );
};

export default Kaartjes;