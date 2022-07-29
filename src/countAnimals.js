const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.reduce((parcial, atual) => {
      if (parcial[atual.name] === undefined) {
        parcial[atual.name] = atual.residents.length;
      } return parcial;
    }, {});
  }
  const animais = species.find((nome) => nome.name === animal.specie);
  if (animal.sex !== undefined) {
    const animaisFiltrados = animais.residents.filter((genero) => genero.sex === animal.sex);
    return animaisFiltrados.length;
  }
  return animais.residents.length;
}
console.log(countAnimals());
module.exports = countAnimals;
