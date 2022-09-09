import Entry from '../database/models/Entry';
import { RegisterEntry } from '../types/interfaces/Entry';

export default class EntryModel {
  createEntry = async (data: RegisterEntry) => {
    const creating = await Entry.create({
      data,
    });

    return creating;
  };
}