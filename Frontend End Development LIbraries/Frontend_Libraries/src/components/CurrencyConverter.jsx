import { useState, useMemo } from 'react';
import "../styles/CurrencyConverter.css";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const rates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    JPY: 150,
  };

  const convertedAmounts = useMemo(() => {
    return {
      USD: amount * rates[from] / rates["USD"],
      EUR: amount * rates[from] / rates["EUR"],
      GBP: amount * rates[from] / rates["GBP"],
      JPY: amount * rates[from] / rates["JPY"],
    }
  }, [amount, from])

  const finalAmount = convertedAmounts[to];

  return (
    <div className="main">
    <div className="inputs">
      <input className="amount-input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select className="rates-from" value={from} onChange={(e) => setFrom(e.target.value)} >
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>JPY</option>
      </select>

      <select className="rates-to" value={to}onChange={(e) => setTo(e.target.value)}>
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>JPY</option>
      </select>
      </div>
      <p className="final-amount">Converted Amount: {finalAmount.toFixed(2)} {from}</p>
    </div>
  )
}