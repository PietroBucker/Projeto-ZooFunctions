const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const cloesed = 'The zoo is closed';
  it('se nao passado paramentro retorna o experado', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Se passado Parametro "Monday" e "09:00-AM" retorna o "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(cloesed);
  });

  it('Se passado Parametro "Tuesday", "Wednesday" e hora menor"08:00-AM" ou maior "06:00-PM"retorna o "The zoo is closed"', () => {
    expect(getOpeningHours('Tuesday', '07:00-AM')).toBe(cloesed);
    expect(getOpeningHours('Tuesday', '07:00-PM')).toBe(cloesed);
    expect(getOpeningHours('Wednesday', '07:00-AM')).toBe(cloesed);
    expect(getOpeningHours('Wednesday', '07:00-PM')).toBe(cloesed);
  });

  it('Se passado Parametro "Thursday", "Friday" e hora menor"08:00-AM" ou maior "10:00-PM"retorna o "The zoo is closed"', () => {
    expect(getOpeningHours('Thursday', '07:00-AM')).toBe(cloesed);
    expect(getOpeningHours('Thursday', '11:00-PM')).toBe(cloesed);
    expect(getOpeningHours('Friday', '07:00-AM')).toBe(cloesed);
    expect(getOpeningHours('Friday', '11:00-PM')).toBe(cloesed);
  });

  it('Se passado Parametro "Saturday" entre "08:00-AM" e "10:00-PM" retorna o "The zoo is closed"', () => {
    expect(getOpeningHours('Saturday', '10:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Friday', '10:00-AM')).toBe('The zoo is open');
  });

  it('se passado um paramenrto diferente de um "Day", ex "Thu" e "09:00-AM" retorna uma exceçao', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('se passado um paramenrto diferente do formato PM,AM , ex "Friday" e "09:00-ZM" retorna uma exceçao', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('se passado um paramenrto com letras no hora, ex "Friday" e "C9:00-AM" retorna uma exceçao', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('se passado um paramenrto com letras no minuto, ex "Sunday" e "09:c0-AM" retorna uma exceçao', () => {
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('se passado um paramenrto hora maior que 12 retorna exceçao', () => {
    expect(() => getOpeningHours('Saturday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('se passado um paramenrto minuto maior que 59 retorna exceçao', () => {
    expect(() => getOpeningHours('Saturday', '11:60-AM')).toThrow('The minutes must be between 0 and 59');
  });

});
