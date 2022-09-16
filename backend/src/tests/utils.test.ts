/* eslint-disable @typescript-eslint/no-var-requires */
// const { CalcPay } = require('../utils/CalcPays');
import CalcPay from '../utils/CalcPays';
// const PasswordHash = require('../utils/PasswordHash');
const { payMock, payMockLastPortion, payMockTotallyPaid } = require('./mocks/calcPayMock');

describe('CalcPay tests', () => {
  describe('1- Testa as possibilidades de Pay One Portion', () => {
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
});