const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeUnit = (param) => {
  const employeeInfo = employees.find((employee) => (employee.firstName === param.name
    || employee.lastName === param.name || employee.id === param.id));
  return { id: employeeInfo.id,
    fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
    species: species.filter((specie) => employeeInfo.responsibleFor.includes(specie.id))
      .map((teste) => teste.name),
    locations: species.filter((specie) => employeeInfo.responsibleFor.includes(specie.id))
      .map((teste) => teste.location),
  };
};

function getEmployeesCoverage(param) {
  if (!param) {
    return employees.map((employee) => ({ id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((teste) => teste.name),
      locations: species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((teste) => teste.location),
    }));
  }
  if (employees.some((employee) => employee.firstName === param.name
    || employee.lastName === param.name || employee.id === param.id)) {
    return getEmployeeUnit(param);
  } throw new Error('Informações inválidas');
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
module.exports = getEmployeesCoverage;
