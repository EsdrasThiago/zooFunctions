const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return employees
  .find((colaborador) => { 
    colaborador.firstName === employeeName || colaborador.lastName === employeeName
  });
}
module.exports = getEmployeeByName;
