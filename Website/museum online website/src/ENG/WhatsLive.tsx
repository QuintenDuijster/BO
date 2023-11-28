import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/WhatsLive.css';


const WhatsLive: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | WhatIsLive';
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

export default WhatsLive;