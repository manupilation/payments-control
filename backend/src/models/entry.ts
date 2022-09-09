import { Op } from 'sequelize';
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

  getAllInDate = async (date: string) => {
    const data = await Entry.findAll({
      where: {
        date,
      },
    });

    return data;
  };

  getByPk = async (id: number) => {
    const data = await Entry.findByPk(id);

    return data;
  };

  createEntry = async (data: RegisterEntry) => {
    const creating = await Entry.create({
      data,
    });

    return creating;
  };
}