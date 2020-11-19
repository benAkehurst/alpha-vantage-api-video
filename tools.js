exports.dataConverter = async (rawData) => {
  // Extract only stock data
  const timeSeriesData = rawData['Time Series (Daily)'];

  // Extracts the dates
  const onlyDates = Object.keys(rawData['Time Series (Daily)']).map((date) => {
    return date;
  });

  // make array only stock price data
  const onlyTimeSeriesData = Object.keys(timeSeriesData).map((timestamp) => {
    return timeSeriesData[timestamp];
  });

  // convert object keys to
  const convertedKeys = onlyTimeSeriesData.map(
    ({
      '1. open': open,
      '2. high': high,
      '3. low': low,
      '4. close': close,
    }) => ({
      open,
      high,
      low,
      close,
    })
  );

  // convert all strings to numbers - parseFloat()
  const convertedValues = convertedKeys.map((item) => {
    return Object.assign(item, {
      open: parseFloat(item.open),
      high: parseFloat(item.high),
      low: parseFloat(item.low),
      close: parseFloat(item.close),
    });
  });

  // Adds the dates into each object
  convertedValues.forEach((element) => {
    for (let i = 0; i < onlyDates.length; i++) {
      const date = onlyDates[i];
      return (element.date = date);
    }
  });

  return convertedValues;
};
