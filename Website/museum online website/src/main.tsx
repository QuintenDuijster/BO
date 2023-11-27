import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.tsx';
import Tickets from './Tickets.tsx';
import OverNxt from './OverNxt.tsx';
import Contact from './Contact.tsx';
import Uitjes from './Uitjes.tsx';
import Faq from './Faq.tsx';
import WorkshopSlowLooking from "./SubContent/WorkshopSlowLooking.tsx"
import WorkshopFilterCreation from "./SubContent/WorkshopFilterCreation.tsx"
import WorkshopCustomisedChange from "./SubContent/WorkshopCustomisedChange.tsx"

import './css/index.css'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="Tickets" element={<Tickets />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="OverNxt" element={<OverNxt />} />
                <Route path="Uitjes" element={<Uitjes />} />
                <Route path="Faq" element={<Faq />} />
                <Route path="WorkshopSlowLooking" element={< WorkshopSlowLooking />} />
                <Route path="WorkshopFilterCreation" element={<WorkshopFilterCreation />} />
                <Route path="WorkshopCustomisedChange" element={< WorkshopCustomisedChange />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Router />);

