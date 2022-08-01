const data = require('../data/zoo_data');

const { prices } = data;
const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
function countEntrants(entrants) {
  // seu código aqui
  const entradas = {}
  let crianca = 0;
  let adulto = 0;
  let senhor = 0;
  entrants.filter((idade) => {
  if (idade.age < 18) {
    crianca += 1
  } if (idade.age >= 18 && idade.age < 50) {
    adulto += 1
  } if (idade.age >= 50) {
    senhor += 1
  }
  })
  entradas.child = crianca;
  entradas.adult = adulto;
  entradas.senior = senhor;
  return entradas
}
function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === {} || typeof entrants === undefined) {
    return 0
  }
  const contador = entrants.child * 20.99 + entrants.adult * 49.99 + entrants.senior * 24.99;
  return contador
}
module.exports = { calculateEntry, countEntrants };
