import React, { useEffect, useState } from 'react';
import { getCryptoPrices } from './services/GeckoAPI';
import { CryptoList } from './components/CryptoList';
import { Timer } from './components/Timer';
import "./App.css";

const App: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoPrices();
      setCryptoData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000) // Fetches data every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>CryptoCurrency Price Tracker</h1>
      <h4>Powered by <a href='https://www.coingecko.com'>CoinGecko</a></h4>
      <Timer />
      <CryptoList cryptoData={cryptoData} />
    </div>
  );
}

export default App;
