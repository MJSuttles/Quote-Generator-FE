// generate api call to retrieve jokes from external source
const jokeEndpoint = 'https://dummyjson.com/quotes';

const getQuotes = () =>
  new Promise((resolve, reject) => {
    fetch(jokeEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getQuotes;
