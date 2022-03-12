const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.argv);
const address = process.argv[2];
if (!address) {
  console.log('Please provide address');
} else {
  geocode(address, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return console.log(err);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      console.log('Location: ', location);
      console.log('forecastData: ', forecastData);
    });
  });
}

// -75.7088, 44.1545  not working
