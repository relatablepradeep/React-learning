import { useEffect, useState } from 'react';

function useCurrencyInfo() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_xDGsKkaaJuNPC08mqm2QhkvAXtCG419HpVJFrdEg&currencies=EUR,USD,CAD`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setData(result.data); // Save the "data" object from the API response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, []);

  return { data, error, loading };
}

export default useCurrencyInfo;
