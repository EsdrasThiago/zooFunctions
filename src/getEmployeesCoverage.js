const data = require('../data/zoo_data');

const emptyArray = (employee) => {
  if (typeof employee === 'undefined') {
    const employeeArray = [];
    data.employees.forEach((operador) => employeeArray.push({
      id: operador.id,
      fullName: `${operador.firstName} ${operador.lastName}`,
      species: findEmployeeAnimals(operador).map((name) => name.name),
      locations: findEmployeeAnimals(operador).map((locations) => locations.location),
    }))
    return employeeArray
  }
};

const findEmployee = (employee) => {
  if (data.employees.some((operador) => operador.firstName === employee.name)) {
    return data.employees.find((operator) => operator.firstName === employee.name);
  } if (data.employees.some((operador) => operador.lastName === employee.name)) {
    return data.employees.find((operator) => operator.lastName === employee.name);
  } if (data.employees.some((operador) => operador.id === employee.id)) {
    return data.employees.find((operator) => operator.id === employee.id);
  }
  throw new Error('Informações inválidas');
};

const findEmployeeAnimals = (employee) => {
  const animalIds = employee.responsibleFor.filter((id) => data.species.map((ids) => id === ids));
  return data.species.filter((animals) => animalIds.find((id) => animals.id === id));
};

const employeeAndAnimal = (employee) => {
  const operador = findEmployee(employee);
  const animais = findEmployeeAnimals(findEmployee(employee));
  const info = {
    id: operador.id,
    fullName: `${operador.firstName} ${operador.lastName}`,
    species: animais.map((name) => name.name),
    locations: animais.map((locations) => locations.location),
  };
  return info;
};

function getEmployeesCoverage(employee) {
  // seu código aqui
  if (emptyArray(employee)) return emptyArray(employee);
  if (findEmployee(employee)) return employeeAndAnimal(employee);
}

module.exports = getEmployeesCoverage;
