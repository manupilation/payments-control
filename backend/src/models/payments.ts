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

  getAllByPatient = async (patient: string) => {
    const data = await Payment.findAll({
      where: {
        patient,
      },
    });

    return data;
  };

  getSomePays = async () => {
    const data = await Payment.findAll({
      where: {
        paid: false,
      }
    });

    return data;
  };

  createPay = async (data: RegisterPay) => {
    const register = await Payment.create({
      data
    });

    return register;
  };

  updatePayToPaid = async (id: number) => {
    const data = await Payment.update({
      paid: true
    }, {
      where: {
        id
      },
    });

    return data;
  };
}