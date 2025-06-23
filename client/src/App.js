import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import CalculatorPage from './pages/CalculatorPage';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <CalculatorPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;