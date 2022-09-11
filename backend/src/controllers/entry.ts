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
}