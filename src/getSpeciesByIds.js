const data = require('../data/zoo_data');
const { species } = data
function getSpeciesByIds(...ids) {
  // seu código aqui
  if (typeof ids === 'undefined') {
    return [];
  }
  return ids.map((id) => species.find((especies) => especies.id === id))
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
module.exports = getSpeciesByIds;
