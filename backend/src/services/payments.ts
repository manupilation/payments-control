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
}

export default PaymentService;
