import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import getQuotes from '../api/GetQuotes';

function QuoteButton() {
  const [quote, setQuote] = useState(null);
  const [buttonText, setButtonText] = useState('GET A QUOTE');

  const fetchQuote = () => {
    getQuotes().then((data) => {
      if (data && data.quotes && data.quotes.length > 0) {
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuote(randomQuote.quote);
        setButtonText('GET ANOTHER QUOTE');
      }
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
      <Button onClick={fetchQuote} id="quote-btn">
        {buttonText}
      </Button>
    </div>
  );
}

export default QuoteButton;
