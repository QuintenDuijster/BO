import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/OverOns.css';

const OverOns: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | OverOns';
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

export default OverOns;