const fs = require('fs');
const fetch = require('node-fetch');
const tools = require('./tools');

const fetchStocks = async () => {
  // Fetches Raw Stock Data
  const rawData = await fetchRawData('AAPL');

  // Converts Data and saves
  await tools.dataConverter(rawData).then((response) => {
    fs.writeFileSync('./stockData.json', JSON.stringify(response));
  });
};

async function fetchRawData(stockSymbol) {
  return await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=${process.env.ALPHA_VANTAGE_KEY}&datatype=json`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

fetchStocks();
