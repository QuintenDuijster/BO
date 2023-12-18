import React, { useEffect } from 'react';
import Header from '../Reusable/Header.tsx';
import Footer from '../Reusable/Footer.tsx';

//CSS
import '../Reusable/PageStyle.css';
import './CSS/Faq.css';


const PrivacyPolicy: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | PrivacyPolicy';
    }, []);

    return (
        <>
            <Header />

            <main className="PrivacyPolicy">
                <article>
                    <h1>Privacy policy</h1>
                    <h2>Privacy Statement</h2>
                    <p>
                        This privacy statement sets out how Nxt Museum (hereinafter referred to as “Nxt Museum” and “we”) uses and protects any personal information that you give to us. This privacy statement is being issued in accordance with the European General Data Protection Regulation (“GDPR”). Nxt Museum is committed to ensuring that your privacy is protected. Therefore Nxt Museum is as transparent as possible in how it deals with personal data, and we aim to achieve this by means of this privacy statement.
                    </p>

                    <p>
                        This privacy statement sets out to whom the personal data belongs, what it is and why we collect & store it. You can also read about the legal basis for collecting personal data, who we can share it with and how we protect it. Finally, we set out what your rights are in respect of that data.
                    </p>

                    <p>
                        Should we ask you to provide certain information by which you can be identified, then you can be assured that it will only be used in accordance with this privacy statement.
                    </p>

                    <p>
                        This privacy statement is effective from 7 July 2020 (as lastly amended on 18 May 2021). The most recent version can always be found on the website of Nxt Museum. We would, therefore, advise you to check our websites regularly for new versions and to read the privacy statement.
                    </p>

                    <p>
                        Nxt Museum’s Privacy Policy is not applicable to other websites. Nxt Museum advises you to always read the privacy statements of those other websites for more detailed information, also in case of affiliated parties.
                    </p>

                    <h2>Coronavirus measures (Covid-19)</h2>

                    <p>
                        In order to comply with the national coronavirus guidelines and to follow the recommendations made by the National Institute for Public Health and the Environment (in Dutch “RIVM”), Nxt Museum also collects personal data for contact research related to coronavirus measures. 
                    </p>

                    <p>
                        When purchasing a ticket Nxt Museum will request you to answer health related questions (sensitive personal data) and provide your name and email address. The Public Health Service Amsterdam (in Dutch “GGD”) may request Nxt Museum to provide personal data in order to help them track the coronavirus. In the interest of – international – public health, Nxt Museum will comply with any such request. Nxt Museum will retain your corona-related information for a period of three (3) months after your visit. 
                    </p>

                    <h2>General</h2>

                    <p>
                        Nxt Museum limits processing personal data to an absolute minimum. However, we will always require certain personal data, such as for the provision of all products and services offered by the museum. For example, the web store and online ticket shop request certain personal data: this data is required in order to supply the ordered products or services correctly. Personal data and other data are also used to improve Nxt Museum’s services and conduct statistical analysis, market research and customer satisfaction surveys. Nxt Museum periodically seeks customer satisfaction feedback by sending surveys to ticket holders using third parties.
                    </p>

                    <p>
                        There are also other instances when we require your personal data, for instance when you subscribe to our email communication, attend an event or activity in the museum or apply for a job at the museum. In addition, we collect personal data when you make use of our websites and/or social media channels, such as your IP address and the browser that you are using. This data is only used in order to analyse how our website is working and may also be used for marketing purposes (Google Analytics). Your data, in the form of video images of you, is also processed if a recording is made of you by security cameras during your visit to the museum.
                    </p>

                    <p>
                        Your personal data is handled with the utmost care. In principle, this data will not be supplied to third parties, unless this is necessary for the service in question, or if we are legally obliged to do so. We do our utmost to ensure that this data is secured to the best of our ability. 
                    </p>

                    <p>
                        Personal data will be stored for the shortest possible length of time, taking into account legal retention periods.
                    </p>

                    <p>
                        Whoever supplies her/his/their data to us is – and remains – the owner of this data. This means that the owner of this data has given permission for the personal data to be processed. It also means that the owner can revoke this permission and request that her/his/their data is deleted.
                    </p>
                </article>
            </main>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;