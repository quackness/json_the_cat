const request = require('request');

const args = process.argv.slice(2);
console.log(args);
if (args.length === 0) {
  console.log("Enter a cat breed");
  process.exit(1);
}

const link = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;
request(link, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  if (response.statusCode === 200) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No cat found");
    } else {
      console.log(data[0].description);
    }
  }
});








