const data = require('../data/zoo_data');

const arrLocations = ['NE', 'NW', 'SE', 'SW'];
const { species } = data;

const getObj = () => {
  const obj = {};
  arrLocations.forEach((arrLocation) => {
    obj[arrLocation] = species.filter((specie) => specie.location === arrLocation)
      .map((specieName) => specieName.name);
  });
  return obj;
};
const getObjBySex = () => {
  return getObj();
};
function getAnimalMap(options) {
  if (options.includeNames) {
    return getObj();
  }
  if (options.sex) {
    return getObj();
  }
}
console.log(getObj());
// console.log(getObjBySex());
// console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
