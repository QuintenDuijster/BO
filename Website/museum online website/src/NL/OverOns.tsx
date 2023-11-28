import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

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