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

  updatePaySubtractPortion = async (id: number) => {
    // Subtrai uma parcela e a registra no entry
    // O valor substituido é subtraido do total, mas o valor da portion não muda
    //
    const pay = await this.getPayById(id);
    if(!pay) return this.throwNoPayError();

    const calcPay = await new CalcPay(pay).payOnePortion();

    if(!calcPay) return this.throwQtPortionError();

    const data = await Payment.update({
      qtPortion: calcPay.qtPortion,
      totalValue: calcPay.totalValue,
      paid: calcPay.paid,
      date: Sequelize.fn('NOW'),
    }, { where : { id } });

    await Entry.create({
      date: Sequelize.fn('NOW'),
      value: calcPay.qtPortion,
      procedure: pay.id,
      patient: pay.patient,
    });

    return data;
  };

  updatePayTotallyPaid = async (id: number) => {
    // Paga todas as parcelas, multiplicando o portionValue pelo qtPortion
    const pay = await this.getPayById(id);
    if(!pay) return this.throwNoPayError();

    const calcPayTotal = await new CalcPay(pay).payAllPortions();

    if(!calcPayTotal) return this.throwQtPortionError();

    const data = await Payment.update({
      qtPortion: calcPayTotal.qtPortion,
      totalValue: calcPayTotal.totalValue,
      paid: calcPayTotal.paid,
      date: Sequelize.fn('NOW'),
    }, { where : { id } });

    await Entry.create({
      date: Sequelize.fn('NOW'),
      value: pay.totalValue,
      procedure: pay.id,
      patient: pay.patient,
    });

    return data;
  };
}