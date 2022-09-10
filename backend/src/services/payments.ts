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
}

export default PaymentService;
