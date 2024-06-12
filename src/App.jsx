import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Billers from './components/Billers';
import Mandates from './components/Mandates';
import Transactions from './components/Transactions';
import Features from './components/Features';
import Reports from './components/Reports';


function App() {
  return (
    <>
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/billers' element={<Billers />} />
        <Route path='/mandates' element={<Mandates />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/features' element={<Features />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </>
  )
}

export default App
