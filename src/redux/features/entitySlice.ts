import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DeletePayload, Row, Rows } from "@/models";

interface ListState {
  loading: boolean;
  error: string;
  lists: Rows[];
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
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    fetchSuccess(state, action: PayloadAction<Rows[]>) {
      state.loading = false;
      state.lists = action.payload;
      state.error = "";
    },
    rowsModified(state, action: PayloadAction<Rows[]>) {
      state.rows = action.payload;
    },
    rowsAdd(state, action: PayloadAction<Rows[]>) {
      state.rows = action.payload;
    },
    rowsNew(state, action: PayloadAction<Row>) {
      for (let i = 0; i < state.rows.length; i++) {
        if (state.rows[i].row.id === 0) {
          state.rows[i].row = action.payload;
        }
      }
    },
    rowUpdate(state, action: PayloadAction<Row>) {
      for (let i = 0; i < state.rows.length; i++) {
        if (state.rows[i].row.id === action.payload.id) {
          state.rows[i].row = action.payload;
        }
      }
    },
    deleteRow(state, action: PayloadAction<DeletePayload>) {
      state.rows.splice(action.payload.i, action.payload.count);
    },
  },
});

export const { fetching, fetchError, fetchSuccess, rowsAdd, deleteRow } = entitySlice.actions;

export default entitySlice.reducer;
