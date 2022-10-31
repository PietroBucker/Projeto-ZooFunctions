const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  return employeeName === undefined ? {} : employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
