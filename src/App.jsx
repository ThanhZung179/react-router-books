import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Invoices from './pages/Invoices'
import Invoice from './components/Invoice'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ padding: "30px", borderBottom: "1px solid" }}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='home' element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path="invoices" element={<Invoices />} >
            <Route index element={<h2 style={{ padding: '1rem' }}>Please select an Invoice</h2>} />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
