const data = require('../data/zoo_data');
const { species } = data
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const chosenAnimal = species.find((residentes) => residentes.name === animal)
  return chosenAnimal.residents.every((residente) => residente.age > age)
}
console.log(getAnimalsOlderThan('bears', 2))
module.exports = getAnimalsOlderThan;
