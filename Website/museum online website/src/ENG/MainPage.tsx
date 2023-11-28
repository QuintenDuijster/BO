import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/MainPage.css';


const MainPage: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum';
    }, []);

    return (
        <>
            <Header />



            <Footer />
        </>
    );
};

export default MainPage;