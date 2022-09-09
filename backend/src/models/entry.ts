import Entry from '../database/models/Entry';
import { RegisterEntry } from '../types/interfaces/Entry';

export default class EntryModel {
  getAll = async () => {
    const data = await Entry.findAll();

    return data;
  };

  createEntry = async (data: RegisterEntry) => {
    const creating = await Entry.create({
      data,
    });

    return creating;
  };
}