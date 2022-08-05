const data = require('../data/zoo_data');

const dias = Object.keys(data.hours)
const animais = data.species
const getAnimalDays = (scheduleTarget) => {
  if (animais.some((especies) => especies.name === scheduleTarget)) {
  const animal = animais.find((animais) => {
    return animais.name === scheduleTarget;
  });
  return animal.availability;
}};

const allDays = (scheduleTarget) => {
  return 'oi'
}

const animalDay = (scheduleTarget) => {
  if (dias.some((dia) => dia === scheduleTarget)) {
  }
  
}
// console.log(Object.keys(data.hours));

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (getAnimalDays(scheduleTarget)) return getAnimalDays(scheduleTarget);
  if (animalDay(scheduleTarget)) return animalDay(scheduleTarget);
  return allDays(scheduleTarget)
};
console.log(getSchedule());
module.exports = getSchedule;
