import EntryModel from '../models/entry';

export default class EntryService {
  declare entryModel: EntryModel;

  constructor() {
    this.entryModel = new EntryModel();
  }

  getAll = async () => {
    const data = await this.entryModel.getAll();

    return data;
  };
}