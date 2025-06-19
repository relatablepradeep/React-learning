import { useState } from 'react';

import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('CAD');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, error, loading } = useCurrencyInfo();

  if (loading) return <div>Loading currency data...</div>;
  if (error) return <div>Error: {error}</div>;

  const options = Object.keys(currencyInfo);

  const convert = () => {
    const fromRate = currencyInfo[from]?.value || 1;
    const toRate = currencyInfo[to]?.value || 1;
    const result = (amount / fromRate) * toRate;
    setConvertedAmount(result.toFixed(2)); // Rounded to 2 decimal places
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>
          From:
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={swap}>Swap</button>
      </div>
      <div>
        <label>
          To:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <input type="number" value={convertedAmount} readOnly />
      </div>
      <button onClick={convert}>Convert</button>
    </div>
  );
}

export default App;



