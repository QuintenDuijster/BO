import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Faq from './faq.tsx';
import Nxt from './aboutNxt.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Faq/>
        <App />
        <Nxt/>
  </React.StrictMode>,
)
