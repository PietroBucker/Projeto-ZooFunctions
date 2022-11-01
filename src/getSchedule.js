const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { hours } = data;
const dias = Object.keys(hours);
const weekDay = {};

dias.forEach((dia) => {
  weekDay[dia] = {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes(dia))
      .map((names) => names.name),
  };
});

const speciesName = species.map((specie) => specie).map((nomes) => nomes.name);

weekDay.Monday.officeHour = 'CLOSED';
weekDay.Monday.exhibition = 'The zoo will be closed!';

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: weekDay.Monday };
  }
  if (dias.includes(scheduleTarget)) {
    return { [scheduleTarget]: weekDay[scheduleTarget] };
  }
  if (speciesName.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return weekDay;
}
console.log(getSchedule());
module.exports = getSchedule;
