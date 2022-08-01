const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se retorna undefined caso não receba parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
   it ('Envia uma mensagem de erro se o parâmetro não for uma string', () => {
     expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
   });
  it('Testa se retorna 4 se receber count como parâmetro', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testa se retorna os residentes se receber names como parâmetro', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se retorna a media de idade se receber averageAge como parâmetro', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa se retorna o id se receber id como parâmetro', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('Testa se retorna null caso não receba um parâmetro valido', () => {
    expect(handlerElephants('elefantes')).toEqual(null);
  });
});
