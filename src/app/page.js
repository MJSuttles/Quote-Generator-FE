'use client';

import React, { useEffect } from 'react';
import getQuotes from '../api/GetQuotes';
import QuoteButton from '../components/QuoteButton';

function Home() {
  useEffect(() => {
    getQuotes().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '10vh',
          padding: '20px',
          maxWidth: '600px',
          margin: '10rem auto 0 auto',
          fontSize: '40px',
        }}
      >
        Welcome to random quote generator!
      </div>

      <QuoteButton />
    </>
  );
}

export default Home;
