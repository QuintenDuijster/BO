import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Faq.css';


const Jobs: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | Jobs';
    }, []);

    return (
        <>
            <Header />

            <main>
                <h1>Jobs</h1>
                <p>
                    Driven by a passion and curiosity for discovering what’s next, we are united by our love of art and technologies. We’re thrilled by what’s to come and we’re building a team to explore just that. 
                </p>
                <div className="Jobs">
                    <p> no jobs</p>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Jobs;