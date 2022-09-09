import Payment from '../database/models/Payments';

class CalcPay extends Payment {
  constructor(pay: Payment) {
    super();
    this.portionValue = pay.portionValue;
    this.totalValue = pay.totalValue;
    this.qtPortion = pay.qtPortion;
  }

  payOnePortion = async () => {
    if (this.qtPortion < 1) return false;
    
    const portion = this.qtPortion -= 1;
    const situation = this.qtPortion === 0;

    const finalValue = {
      qtPortion: portion,
      totalValue: this.totalValue -= this.portionValue,
      paid: situation,
    };

    return finalValue;
  };

  payAllPortions = async () => {
    if (this.qtPortion < 1) return false;

    const finalValue = {
      qtPortion: 0,
      totalValue: 0,
      paid: true,
    };

    return finalValue;

  };
}

export default CalcPay;
