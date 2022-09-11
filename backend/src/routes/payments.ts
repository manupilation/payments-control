import { Router } from 'express';
import PaymentController from '../controllers/payments';

const payments = Router();
const controller = new PaymentController;

payments.get('/payments', controller.getSomePays);

export default payments;
