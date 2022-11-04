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

const getNameResid = (param) => {
  const obj = {};
  arrLocations.forEach((arrLocation) => {
    obj[arrLocation] = species.filter((specie) => specie.location === arrLocation)
      .map((specieName) => {
        if (param.sorted) {
          return {
            [specieName.name]: specieName.residents.map((test) => test.name).sort(),
          };
        }
        return {
          [specieName.name]: specieName.residents.map((test) => test.name),
        };
      });
  });
  return obj;
};

const getObjBySex = (param) => {
  const obj = {};
  arrLocations.forEach((arrLocation) => {
    obj[arrLocation] = species.filter((specie) => specie.location === arrLocation)
      .map((specieName) => {
        if (param.sorted) {
          return {
            [specieName.name]: specieName.residents.filter((test) => test.sex === param.sex)
              .map((teste) => teste.name).sort(),
          };
        }
        return {
          [specieName.name]: specieName.residents.filter((test) => test.sex === param.sex)
            .map((teste) => teste.name),
        };
      });
  });
  return obj;
};
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return getObj();
  }
  if (options.includeNames && !options.sex) {
    return getNameResid(options);
  }
  return getObjBySex(options);
}
// console.log(getObj());
// console.log(getObjBySex({sex: 'male', sorted: true }));
console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
module.exports = getAnimalMap;
