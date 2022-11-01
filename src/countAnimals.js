const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
    return obj;
  } if (animal.sex) {
    return species.find((specie) => specie.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return species.find((specie) => specie.name === animal.specie).residents.length;
}
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
