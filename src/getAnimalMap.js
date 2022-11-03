const data = require('../data/zoo_data');

const { species } = data;
function getAnimalMap(options) {
  return {
    NE: species.filter((specie) => specie.location === 'NE').map((teste) => {
      return {
        [teste.name]: ,
      };
    }),
  };
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
