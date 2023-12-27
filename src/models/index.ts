export interface List {
  child?: Row | Row[];
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
  [key: string]: unknown;
}

export interface Row {
  child?: Row | Row[];
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
  [key: string]: unknown;
}

export interface Rows {
  row: Row;
  level: number;
  isNew?: boolean;
}

export interface DeletePayload {
  i: number;
  count: number;
}

export interface OutlayRowRequest {
  current: Row;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId: number;
  rowName: string;
  salary: number;
  supportCosts: number;
}

export interface OutlayRowUpdateRequest {
  current: Row;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
}

export interface RowResponse {
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}

export interface RecalculatedRows {
  changed: RowResponse[];
  current: RowResponse;
}
