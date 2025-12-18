import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';

interface ExchangeRates {
  [key: string]: number;
}

interface CurrencyData {
  base_code: string;
  conversion_rates: ExchangeRates;
}

interface SupportedCodesData {
  supported_codes: [string, string][];
}

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [availableCurrencies, setAvailableCurrencies] = useState<{ code: string, name: string }[]>([]);
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchSupportedCurrencies = async () => {
    try {
      const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/codes`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch supported currencies');
      }

      const data: SupportedCodesData = await response.json();
      const currencies = data.supported_codes.map(([code, name]) => ({ code, name }));
      setAvailableCurrencies(currencies);
    } catch (err) {
      console.error('Error fetching currencies:', err);
      setAvailableCurrencies([
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound Sterling' }
      ]);
    }
  };

  const fetchExchangeRates = async (baseCurrency: string) => {
    setLoading(true);
    setError('');
    try {
      const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }

      const data: CurrencyData = await response.json();
      setExchangeRates(data.conversion_rates);
    } catch (err) {
      setError('Failed to fetch exchange rates. Please check your API');
      console.error('Error fetching exchange rates:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupportedCurrencies();
  }, []);

  useEffect(() => {
    if (availableCurrencies.length > 0) {
      fetchExchangeRates(fromCurrency);
    }
  }, [fromCurrency, availableCurrencies]);

  useEffect(() => {
    if (exchangeRates[toCurrency] && amount) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount)) {
        setResult(numAmount * exchangeRates[toCurrency]);
      }
    }
  }, [amount, toCurrency, exchangeRates]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(num);
  };

  return (
    <div className="converter-container">
      <div className="converter-card">
        <div className="header">
          <h1>💱 Currency Converter</h1>
          <p> Exchange rates</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="converter-form">
          <div className="input-group">
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="0"
              step="0.01"
            />
          </div>

          <div className="currency-section">
            <div className="currency-group">
              <label>From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {availableCurrencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="swap-button"
              onClick={handleSwapCurrencies}
              disabled={loading}
            >
              ⇄
            </button>

            <div className="currency-group">
              <label>To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {availableCurrencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="result-section">
            <div className="result-card">
              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="result">
                  <div className="conversion-display">
                    <span className="from-amount">
                      {formatNumber(parseFloat(amount) || 0)} {fromCurrency}
                    </span>
                    <span className="equals">=</span>
                    <span className="to-amount">
                      {formatNumber(result)} {toCurrency}
                    </span>
                  </div>
                  {exchangeRates[toCurrency] && (
                    <div className="exchange-rate">
                      1 {fromCurrency} = {formatNumber(exchangeRates[toCurrency])} {toCurrency}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;