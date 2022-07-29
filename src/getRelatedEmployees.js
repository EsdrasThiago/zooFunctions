const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const arrayDeManagers = employees.map((trabalhador) => trabalhador.managers);
  return (arrayDeManagers.some((gerente) => gerente.find((elemento) => elemento === id)));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
  const filtrados = employees
    .filter((filtrar) => filtrar.managers
      .find((elemento) => elemento === managerId));
    return filtrados.map((nomes) => `${nomes.firstName} ${nomes.lastName}`);
  }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
module.exports = { isManager, getRelatedEmployees };
