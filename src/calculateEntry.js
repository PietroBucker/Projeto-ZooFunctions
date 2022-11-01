const data = require('../data/zoo_data');

const { prices: { child, adult, senior } } = data;
// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
function countEntrants(entrants) {
  return {
    child: entrants.reduce((acc, curr) => (curr.age < 18 ? acc + 1 : acc), 0),
    adult: entrants.reduce((acc, curr) => (curr.age >= 18 && curr.age < 50 ? acc + 1 : acc), 0),
    senior: entrants.reduce((acc, curr) => (curr.age >= 50 ? acc + 1 : acc), 0),
  };
}
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return (child * countEntrants(entrants).child)
  + (adult * countEntrants(entrants).adult)
  + (senior * countEntrants(entrants).senior);
}
module.exports = { calculateEntry, countEntrants };
