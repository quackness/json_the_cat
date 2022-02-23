const request = require('request');

const args = process.argv.slice(2);
console.log(args);
if (args.length === 0) {
  console.log("Enter a cat breed");
  process.exit(1);
}

const link = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;
request(link, (error, response, body) => {
  // console.log(typeof body);
  // console.log("this is the body inside the request:", body);
  const data = JSON.parse(body);
  console.log(data);
  //console.log(typeof data);
  //console.log(data[0]);
  console.log(data[0].description);

});



