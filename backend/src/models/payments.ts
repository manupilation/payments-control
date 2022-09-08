import Payment from '../database/models/Payments';
import IPayment, { RegisterPay } from '../types/interfaces/Payments';

export default class PaymentsModel {
  getPayById = async (id: number) => {
    const data = await Payment.findOne({
      where: {
        id,
      },
    });

    return data;
  };
}