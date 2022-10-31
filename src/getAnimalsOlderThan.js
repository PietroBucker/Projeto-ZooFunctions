const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => animal === specie.name)
    .residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
