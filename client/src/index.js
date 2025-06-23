import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './styles/App.css';
import './styles/components.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            fontSize: '0.875rem',
            borderRadius: '0.5rem',
            background: 'var(--background-elevated)',
            color: 'var(--text-primary)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);