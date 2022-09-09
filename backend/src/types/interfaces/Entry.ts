interface IEntry {
  id: number;
  date: string;
  value: number;
  procedure: number;
  patient: string;
}

export interface RegisterEntry {
  date: string;
  value: number;
  procedure: number;
  patient: string;
}

export default IEntry;