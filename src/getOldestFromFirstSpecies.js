const data = require('../data/zoo_data');

const { employees, species } = data;
// const [, Burl] = employees;

function getOldestFromFirstSpecies(id) {
  const espeicesId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === espeicesId)
    .residents.reduce((acc, curr) => (curr.age > acc.age ? curr : acc));
  const { name, sex, age } = animal;
  return [name, sex, age];
}

// console.log(getOldestFromFirstSpecies(Burl.id));
module.exports = getOldestFromFirstSpecies;
