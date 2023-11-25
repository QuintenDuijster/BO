import React from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

const FAQ: React.FC = () => {
    return (
        <div className="Faq">

            <Header />
            <main>
                <div className="Faq">
                    <h1>Veelgestelde vragen</h1>
                    <p>Hier vindt u onze meest gestelde vragen</p>

                    <div className="Tickets">
                        <button onClick={ }>Tickets</button>
                    </div>
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default FAQ;