const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const nome = employees.find((colaborador) => colaborador.firstName === employeeName);
  const sobreNome = employees.find((colaborador) => colaborador.lastName === employeeName);
  return nome || sobreNome;
}
module.exports = getEmployeeByName;
