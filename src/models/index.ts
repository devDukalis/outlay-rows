export interface List {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  child?: any;
  id: number;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId?: null | number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
  level?: number;
}

export interface Row {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  child?: any;
  id: number;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId?: null | number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}

export interface Rows {
  row: Row;
  level: number;
  isNew?: boolean;
}
