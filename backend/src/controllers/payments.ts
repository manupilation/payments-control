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

  getAllByPatient = async (req: Request, res: Response) => {
    const { patient } = req.body;
    const data = await this.paymentService.getAllByPatient(patient);

    res.status(200).json(data);
  };

  getSomePays = async (req: Request, res: Response) => {
    const data = await this.paymentService.getSomePays();

    res.status(200).json(data);
  };

  createPay = async (req: Request, res: Response) => {
    const { data } = req.body;
    const register = await this.paymentService.createPay(data);

    res.status(200).json(register);
  };

  updatePayToPaid = async (req: Request, res: Response) => {
    const { id } = req.params;

    const data = await this.paymentService.updatePayToPaid(Number(id));

    res.status(200).json(data);
  };

  updatePaySubtractPortion = async (req: Request, res: Response) => {
    const { id } = req.params;

    const data = await this.paymentService.updatePaySubtractPortion(Number(id));

    res.status(200).json(data);
  };

  updatePayTotallyPaid = async (req: Request, res: Response) => {
    const { id } = req.params;

    const data = await this.paymentService.updatePayTotallyPaid(Number(id));

    res.status(200).json(data);
  };
}