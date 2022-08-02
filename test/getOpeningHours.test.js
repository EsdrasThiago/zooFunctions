const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se esta fechado na segunda as 9 horas', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Testa se esta aberto na terça as 9 horas', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Testa se esta aberto na quarta as 9 horas', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Testa se da erro ao colocar Thu', () => {
    expect(() => { 
        getOpeningHours('Thu', '09:00-AM')}).toThrow('The day must be valid. Example: Monday')
    });
  it('Testa se da erro ao colocar 09:00-ZM', () => {
    expect(() => { 
        getOpeningHours('Friday', '09:00-ZM')}).toThrow('The abbreviation must be \'AM\' or \'PM\'')
  });
  it('Testa se a hora é um numero', () => {
    expect(() => {
        getOpeningHours('Saturday', 'C9:00-AM')}).toThrow('The hour should represent a number')
  });
  it('Testa se os minutos são numeros', () => {
    expect(() => {
        getOpeningHours('Sunday', '09:c0-AM')}).toThrow('The minutes should represent a number')
  });
  it('Testa se as horas estão entre 0 ou 12', () => {
    expect(() => {
        getOpeningHours('Monday', '13:00-AM')}).toThrow('The hour must be between 0 and 12')
  });
  it('Testa se os minutos estão entre 0 ou 59', () => {
    expect(() => {
        getOpeningHours('Tuesday', '09:60-AM')}).toThrow('The minutes must be between 0 and 59')
  })
});
