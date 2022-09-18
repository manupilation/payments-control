/* eslint-disable @typescript-eslint/no-var-requires */
// const { CalcPay } = require('../utils/CalcPays');
import CalcPay from '../utils/CalcPays';
import PasswordHash from '../utils/PasswordHash';
const { payMock, payMockLastPortion, payMockTotallyPaid, payMockAllPortions } = require('./mocks/calcPayMock');

describe('CalcPay tests', () => {
  describe('1 - Testa as possibilidades de Pay One Portion', () => {
    beforeAll(() => {
      jest.resetAllMocks();
    });

    it('A- Verifica a função payOnePortion', async () => {
      const calcPay = new CalcPay(payMock).payOnePortion();

      expect(await calcPay).toEqual({
        qtPortion: 1,
        totalValue: 250,
        paid: false,
      });
    });

    it('B- Verifica que ela torna paid true se acabarem as portions', async () => {
      const calcPay = new CalcPay(payMockLastPortion).payOnePortion();

      expect(await calcPay).toEqual({
        qtPortion: 0,
        totalValue: 0,
        paid: true,
      });
    });

    it('C- Verifica se, ao tentar cobrar uma dívida paga, retorna false', async () => {
      const calcPay = new CalcPay(payMockTotallyPaid).payOnePortion();

      expect(await calcPay).toBeFalsy();
    });
  });

  describe('2 - Testa as possibilidades de PayAllPortions', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('A- Testa se retorna os valores esperados', async () => {
      const payAll = new CalcPay(payMockAllPortions).payAllPortions();

      expect(await payAll).toEqual({
        qtPortion: 0,
        totalValue: 0,
        paid: true,
      });
    });

    it('B- Testa se retorna false caso a dívida já está totalmente paga', async () => {
      const payAll = new CalcPay(payMockTotallyPaid).payAllPortions();

      expect(await payAll).toBeFalsy();
    });
  });
});

describe('HashPass tests', () => {
  describe('1- Testa as possibilidades para o metodo hashPassword', () => {
    const hashString = 'Aracnofobia';
    const hash = PasswordHash.hashPassword(hashString);

    it('A - Testa se a função gera um hash de uma string', async () => {
      expect(await hash).not.toBe(hashString);
    });

    it('B - Testa se o hash sempre retorna o tamanho padrão', async () => {
      expect((await hash).length).toBe(60);
    });

    beforeEach(() => {
      jest.resetAllMocks();
    });
  });

  describe('2- Testa as possibilidades de compare password', () => {
    const hashString = 'NationalAnthem';
    const hash = PasswordHash.hashPassword(hashString);

    it('A - Testa se, ao comparar corretamente, retorna true', async () => {
      const compare = await PasswordHash.comparePassword(hashString, await hash);
    
      expect(compare).toBeTruthy();
    });

    it('B - Testa se, ao comparar incorretamente, retorna false', async () => {
      const compare = await PasswordHash
        .comparePassword('I\'m wondering why I got out of bed at all', await hash);

      expect(compare).toBeFalsy();
    });

    beforeEach(() => {
      jest.resetAllMocks();
    });
  });
});