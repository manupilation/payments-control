import Entry from '../database/models/Entry';
import { RegisterEntry } from '../types/interfaces/Entry';

export default class EntryModel {
  getAll = async () => {
    const data = await Entry.findAll();

    return data;
  };

  getAllByPatient = async (patient: string) => {
    const data = await Entry.findAll({
      where: {
        patient
      },
    });

    return data;
  };

  getAllBetweenDates = async (startDate: string, endDate: string) => {
    const data = await Entry.findAll({
      where: {
        'date': {[Op.between]: [startDate, endDate]},
      },
    });

    return data;
  };

  createEntry = async (data: RegisterEntry) => {
    const creating = await Entry.create({
      data,
    });

    return creating;
  };
}