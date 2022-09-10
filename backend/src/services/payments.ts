import PaymentsModel from '../models/payments';

class PaymentService {
  declare paymentModel: PaymentsModel;

  constructor() {
    this.paymentModel = new PaymentsModel();
  }
}

export default PaymentService;
