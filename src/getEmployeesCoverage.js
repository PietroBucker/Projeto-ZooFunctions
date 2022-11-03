const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(param) {
  if (!param) {
    return employees.map((employee) => ({ id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor,
      locations: species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((teste) => teste.location),
    }));
  }
  if (employees.some((employee) => employee.firstName === param)) {
    const employeeInfo = employees.find((employee) => (employee.firstName === param));
    return { id: employeeInfo.id,
      fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
      species: employeeInfo.responsibleFor,
      locations: species.filter((specie) => employeeInfo.responsibleFor.includes(specie.id))
        .map((teste) => teste.location),
    };
  } throw new Error('Informações inválidas');
}
// console.log(getEmployeesCoverage('Sharonda'));
module.exports = getEmployeesCoverage;
