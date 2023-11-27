import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

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