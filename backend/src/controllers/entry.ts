import { Request, Response } from 'express';
import EntryService from '../services/entry';

export default class EntryController {
  declare entryService: EntryService;

  constructor() {
    this.entryService = new EntryService;
  }

  getAll = async (req: Request, res: Response) => {
    const data = await this.entryService.getAll();
  
    res.status(200).json(data);
  };

  getAllByPatient = async (req: Request, res: Response) => {
    const { patient } = req.body;

    const data = await this.entryService.getAllByPatient(patient);

    res.status(200).json(data);
  };

  getAllInDate = async (req: Request, res: Response) => {
    const { date } = req.body;

    const data = await this.entryService.getAllInDate(date);

    res.status(200).json(data);
  };

  getByPk = async (req: Request, res: Response) => {
    const { id } = req.params;

    const data = await this.entryService.getByPk(Number(id));

    res.status(200).json(data);
  };

  createEntry = async (req: Request, res: Response) => {
    const { data } = req.body;

    const creating = await this.entryService.createEntry(data);

    res.status(200).json(creating);
  };
}