import { Router } from 'express';
import PaymentController from '../controllers/payments';

const payments = Router();
const controller = new PaymentController;

payments.post('/patient', controller.getAllByPatient);
payments.post('/create', controller.createPay);
payments.post('/:id', controller.getPayById);
payments.patch('/:id/paid', controller.updatePaySubtractPortion);
payments.patch('/:id/totally', controller.updatePayTotallyPaid);
payments.get('/', controller.getSomePays);

export default payments;
