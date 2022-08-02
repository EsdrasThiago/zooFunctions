const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let crianca = 0;
  let adulto = 0;
  let senhor = 0;
  return entrants.reduce((valorParcial, valorAtual) => {
    const parcial = valorParcial;
    if (valorAtual.age < 18) {
      crianca += 1;
    } if (valorAtual.age >= 18 && valorAtual.age < 50) {
      adulto += 1;
    } if (valorAtual.age >= 50) {
      senhor += 1;
    } parcial.child = crianca;
    parcial.adult = adulto;
    parcial.senior = senhor;
    return valorParcial;
  }, { child: 0, adult: 0, senior: 0 });
}
function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entradas = countEntrants(entrants);
  const contador = entradas.child * 20.99 + entradas.adult * 49.99 + entradas.senior * 24.99;
  return contador;
}
module.exports = { calculateEntry, countEntrants };
