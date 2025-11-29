import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter.jsx'

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
              <Link to="/currency-converter">Currency Converter</Link>
            </>
          } />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App