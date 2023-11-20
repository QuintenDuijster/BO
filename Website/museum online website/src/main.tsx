import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.tsx';
import Tickets from './Tickets.tsx';

import './index.css'

export default function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Router />);

