import PaymentService from '../services/payments';

export default class PaymentController {
  declare paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService;
  }
}