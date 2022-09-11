import { Request, Response } from 'express';
import PaymentService from '../services/payments';

export default class PaymentController {
  declare paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService;
  }

  getPayById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.paymentService.getPayById(Number(id));

    res.status(200).json(data);
  };
}