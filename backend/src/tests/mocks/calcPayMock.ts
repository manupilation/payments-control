import Payments from '../../types/interfaces/Payments';

const payMock: Payments = {
  id: 12,
  patient: 'Doja Cat',
  procedure: 'Clareamento dental',
  paid: false,
  date: '2022-09-16 14:36:00',
  totalValue: 500,
  portionValue: 250,
  qtPortion: 2
};

const payMockLastPortion: Payments = {
  id: 6,
  patient: 'Miguel Angelo',
  procedure: 'Remoção de cárie',
  paid: false,
  date: '',
  totalValue: 100,
  portionValue: 100,
  qtPortion: 1
};

const payMockNoPortion: Payments = {
  id: 12,
  patient: 'Gwen Pellinore',
  procedure: 'Micro-cirurgia',
  paid: false,
  date: '',
  totalValue: 600,
  portionValue: 600,
  qtPortion: 1
};

const payMockTotallyPaid: Payments = {
  id: 20,
  patient: 'Marco Braun',
  procedure: 'Limpeza bucal',
  paid: true,
  date: '',
  totalValue: 0,
  portionValue: 0,
  qtPortion: 0
};

export {
  payMock,
  payMockNoPortion,
  payMockLastPortion,
  payMockTotallyPaid,
};