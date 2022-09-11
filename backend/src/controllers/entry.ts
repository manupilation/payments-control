import { Request, Response } from 'express';
import EntryService from '../services/entry';

export default class EntryController {
  declare entryService: EntryService;

  constructor() {
    this.entryService = new EntryService;
  }
}