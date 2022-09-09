import Payment from '../database/models/Payments';

class CalcPay extends Payment {
  constructor(pay: Payment) {
    super();
    this.portionValue = pay.portionValue;
    this.totalValue = pay.totalValue;
    this.qtPortion = pay.qtPortion;
  }
}

export default CalcPay;
