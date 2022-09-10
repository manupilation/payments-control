import PaymentsModel from '../models/payments';

class PaymentService {
  declare paymentModel: PaymentsModel;

  constructor() {
    this.paymentModel = new PaymentsModel();
  }

  getPayById = async (id: number) => {
    const data = await this.paymentModel.getPayById(id);

    return data;
  };

  getAllByPatient = async (patient: string) => {
    const data = await this.paymentModel.getAllByPatient(patient);

    return data;
  };

  getSomePays = async () => {
    const data = await this.paymentModel.getSomePays();

    return data;
  };

  createPay = async (data: RegisterPay) => {
    const register = await this.paymentModel.createPay(data);

    return register;
  };

  updatePayToPaid = async (id: number) => {
    const data = await this.paymentModel.updatePayToPaid(id);

    return data;
  };

  updatePaySubtractPortion = async (id: number) => {
    const data = await this.paymentModel.updatePaySubtractPortion(id);

    return data;
  };
}

export default PaymentService;
