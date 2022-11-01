const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const {species: {name}, hours} = data;
const dias = Object.keys(hours);
const weekDay = {};
dias.forEach((dia) => {
  weekDay[dia] = {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes(dia))
      .map((names) => names.name),
  };
});
weekDay.Monday.officeHour = 'CLOSED';
weekDay.Monday.exhibition = 'The zoo will be closed!';

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return weekDay;
  }
  if (scheduleTarget === 'Monday') {
    return "Mondey: " + weekDay.Monday;
  }
  // return species.find((specie) => specie.name === scheduleTarget).availability;
}
console.log(getSchedule('Monday'));
module.exports = getSchedule;