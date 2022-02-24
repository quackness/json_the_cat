const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const link = `https://api.thecatapi.com/v1/breeds/search?q=${breedName[0]}`;
  request(link, (error, response, body) => {
    if (error) {
      callback(error, null);
      console.log(error);
    } else if (response.statusCode === 200) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("No cat found", null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };


