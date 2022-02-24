const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.slice(2);
if (breedName.length === 0) {
  console.log("Enter a cat breed");
  process.exit(1);
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
