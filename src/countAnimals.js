const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.reduce((valorParcial, valorAtual) => {
      if (valorParcial[valorAtual.name] === undefined) {
        const parcial = valorParcial;
        parcial[valorAtual.name] = valorAtual.residents.length;
      } return valorParcial;
    }, {});
  }
  const animais = species.find((nome) => nome.name === animal.specie);
  if (animal.sex !== undefined) {
    const animaisFiltrados = animais.residents.filter((genero) => genero.sex === animal.sex);
    return animaisFiltrados.length;
  }
  return animais.residents.length;
}
module.exports = countAnimals;
