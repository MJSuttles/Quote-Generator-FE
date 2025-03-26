import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import getQuotes from '../api/GetQuotes';

function QuoteButton() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true); // Set loading to true before fetching a quote
    getQuotes().then((data) => {
      if (data && data.quotes && data.quotes.length > 0) {
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuote(randomQuote.quote);
      }
      setLoading(false); // Set loading to false after quote is fetched
    });
  };

  useEffect(() => {
    fetchQuote(); // Display an initial quote on load
  }, []);

  return (
    <div className="quote-container">
      <h1 id="quote-title">Quote of the Day</h1>
      <hr />
      <h3 id="quote-text">{quote || 'Loading...'}</h3>
      <Button onClick={fetchQuote} id="quote-btn" disabled={loading}>
        {loading ? 'Fetching quote...' : 'Get Another Quote'}
      </Button>
    </div>
  );
}

export default QuoteButton;
