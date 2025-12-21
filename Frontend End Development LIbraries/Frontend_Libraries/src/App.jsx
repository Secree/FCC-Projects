import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Lab Components
import CurrencyConverter from './components/Lab/CurrencyConverter.jsx'
import OTPGenerator from './components/Lab/OtpGenerator.jsx'

// Lesson Components
import Counter from './components/Lesson/Counter.jsx'
import FootballerSearch from './components/Lesson/Debounce/Footballersearch.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <h1>Welcome to Frontend Libraries!</h1>
              <p>Click below on what you want to see!</p>
              
              <h2>Lab Components</h2>
              <Link to="/currency-converter">Currency Converter</Link>
              <br />
              <Link to="/otp-generator">OTP Generator</Link>
              <br />
              
              <h2>Lesson Components</h2>
              <Link to="/counter">Counter</Link>
              <br />
              <Link to="/footballer-search">Footballer Search</Link>
            </>
          } />
          {/* Lab Routes */}
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          <Route path="/otp-generator" element={<OTPGenerator />} />
          
          {/* Lesson Routes */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/footballer-search" element={<FootballerSearch />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
