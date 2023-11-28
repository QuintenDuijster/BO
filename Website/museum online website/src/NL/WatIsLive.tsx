import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/WatIsLive.css';

const WatIsLive: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | WatIsLive';
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

export default WatIsLive;