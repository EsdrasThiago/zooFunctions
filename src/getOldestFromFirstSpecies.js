const data = require('../data/zoo_data');

const { species } = data;

const findColaborator = (id) => {
  const colaborator = data.employees.find((colaborador) => colaborador.id === id);
  return colaborator;
};

const firstSpecie = (first) => {
  const comparador = first.responsibleFor.find((id) => species.map((ids) => id === ids));
  return comparador;
};

const findAnimalResidents = (id) => {
  const animal = species.find((animals) => animals.id === id);
  return animal.residents;
};

const oldest = (animal) => {
  const idades = animal.map((idade) => idade.age);
  const ordenar = idades.sort((a, b) => b - a);
  const encontrar = animal.find((older) => older.age === ordenar[0]);
  return Object.values(encontrar);
};

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  return oldest(findAnimalResidents(firstSpecie(findColaborator(id))));
}
module.exports = getOldestFromFirstSpecies;
