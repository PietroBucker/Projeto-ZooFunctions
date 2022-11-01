const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('se passado "name" retorna um array com os nomes', () => {
    const nomes = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(nomes);
  });
  it('se passado "averageAge tornar a media de diade dos animais"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Caso passado uma string invalida retorna "null"', () => {
    expect(handlerElephants('qualquercoisa')).toBe(null);
  });
  it('caso pasado algum valor diferente de "string" retornar tratamento "Parâmetro inválido, é necessário uma string"', () => {
    const notString = 10;
    expect(handlerElephants(notString)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Caso nao passado nenhum paramentro retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('caso passado "location" deve retornar "NW"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('caso passado "location" deve retornar "NW"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('se passado "name" retorna um array com os nomes', () => {
    const dias = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(dias);
  });
});
