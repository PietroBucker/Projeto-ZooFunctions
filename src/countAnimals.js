const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
  } else {
    const cont = species.find((specie) => specie.name === animal.specie)
      .residents.filter((resident) => {
        if (resident.sex === animal.sex) return resident;
        if (undefined === animal.sex) return resident;
      }).length;
    return cont;
  }
  return obj;
}
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
