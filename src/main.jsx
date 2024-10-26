import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
  
)
