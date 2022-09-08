interface Payments {
  id: number,
  patient: string,
  procedure: string,
  paid: boolean,
  date: string,
  totalValue: number,
  portionValue: number,
  qtPortion: number,
}

export default Payments;
