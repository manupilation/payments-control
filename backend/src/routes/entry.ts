import { Router } from 'express';
import EntryController from '../controllers/entry';

const entry = Router();
const controller = new EntryController;

entry.get('/', controller.getAll);
entry.get('/patient', controller.getAllByPatient);
entry.get('/patient/date', controller.getAllInDate);
entry.get('/:id', controller.getByPk);

entry.post('/', controller.createEntry);

export default entry;
