// List from https://www.alphalists.com/list/alphabetical-list-minnesota-cities
const citiesArray = require('./cities.json')

function random() {
    return citiesArray[Math.floor(Math.random() * citiesArray.length)];
} 
function all() {
    return citiesArray;
} 

module.exports = {
    all,
    random
}
