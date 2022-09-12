import { Sequelize } from 'sequelize';
import EntryModel from './entry';
import Payment from '../database/models/Payments';
import { RegisterPay } from '../types/interfaces/Payments';
import CalcPay from '../utils/CalcPays';

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

    console.log(data);

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

    const entry = new EntryModel();

    await entry.createEntry({
      date: String(Sequelize.fn('NOW')),
      value: calcPay.qtPortion,
      procedure: pay.id,
      patient: pay.patient,
    });

    return data;
  };

  updatePayTotallyPaid = async (id: number) => {
    const pay = await this.getPayById(id);
    if(!pay) return this.throwNoPayError();

    const calcPayTotal = await new CalcPay(pay).payAllPortions();

    if(!calcPayTotal) return this.throwQtPortionError();

    const data = await Payment.update({
      qtPortion: calcPayTotal.qtPortion,
      totalValue: calcPayTotal.totalValue,
      paid: calcPayTotal.paid,
      date: String(Sequelize.fn('NOW')),
    }, { where : { id } });

    const entry = new EntryModel();

    await entry.createEntry({
      date: String(Sequelize.fn('NOW')),
      value: pay.totalValue,
      procedure: pay.id,
      patient: pay.patient,
    });

    return data;
  };

  throwNoPayError = () => {
    const err = new Error();
    err.name = 'no_payment';
    err.message = 'Não encontramos nenhum pagamento com esses dados.';

    throw err;
  };

  throwQtPortionError = () => {
    const err = new Error();
    err.name = 'no_portion';
    err.message = 'Este procedimento já foi completamente pago!';

    throw err;
  };
}