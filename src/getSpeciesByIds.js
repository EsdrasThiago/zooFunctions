const data = require('../data/zoo_data');
const { species } = data
function getSpeciesByIds(...ids) {
  // seu código aqui
  if (typeof ids === 'undefined') {
    return [];
  }
  return ids.map((id) => species.find((especies) => especies.id === id))
}
module.exports = getSpeciesByIds;
