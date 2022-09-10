import EntryModel from '../models/entry';
import { RegisterEntry } from '../types/interfaces/Entry';

export default class EntryService {
  declare entryModel: EntryModel;

  constructor() {
    this.entryModel = new EntryModel();
  }

  getAll = async () => {
    const data = await this.entryModel.getAll();

    return data;
  };

  getAllByPatient = async (patient: string) => {
    const data = await this.entryModel.getAllByPatient(patient);

    return data;
  };

  getAllInDate = async (date: string) => {
    const data = await this.entryModel.getAllInDate(date);

    return data;
  };

  getByPk = async (id: number) => {
    const data = await this.entryModel.getByPk(id);

    return data;
  };

  createEntry = async (data: RegisterEntry) => {
    const creating = await this.entryModel.createEntry(data);

    return creating;
  };
}