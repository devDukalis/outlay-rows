import { createSlice } from "@reduxjs/toolkit";

import { List, Row, Rows } from "@/models";

interface ListState {
  loading: boolean;
  error: string;
  lists: List[];
  rows: Rows[];
  newRow: Row;
}

const initialState: ListState = {
  loading: false,
  error: "",
  lists: [],
  rows: [],
  newRow: {
    id: 0,
    rowName: "",
    salary: 0,
    equipmentCosts: 0,
    overheads: 0,
    parentId: null,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0,
    total: 0,
  },
};

export const entitySlice = createSlice({
  name: "entity",
  initialState,
  reducers: {},
});

export default entitySlice.reducer;
