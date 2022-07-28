const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const chosenAnimal = species.find((residentes) => residentes.name === animal);
  return chosenAnimal.residents.every((residente) => residente.age > age);
}
module.exports = getAnimalsOlderThan;
