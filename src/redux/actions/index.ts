import axios from "@/services/api";

import { AppDispatch } from "@/redux/store";
import { entitySlice } from "@/redux/features/entitySlice";

import {
  List,
  Rows,
  Row,
  OutlayRowRequest,
  OutlayRowUpdateRequest,
  RecalculatedRows,
} from "@/models";

function isRowArray(child: Row | Row[]): child is Row[] {
  return Array.isArray(child);
}

const eID = 33245;

export const fetchEntity = (isEmpty: boolean) => {
  function wrap(props: List[] | Rows[]) {
    let level = 0;
    const rowsQ: Rows[] = [];

    for (let i = 0; i < props.length; i++) {
      getProp(props[i] as List);
      level--;
    }

    function getProp(rowsW: Row) {
      rowsQ.push({ row: rowsW, level: level, isNew: false });
      level++;

      if (rowsW && rowsW.child && isRowArray(rowsW.child) && (rowsW.child as Row[]).length > 0) {
        for (let i = 0; i < (rowsW.child as Row[]).length; i++) {
          getProp(rowsW && rowsW.child[i]);
          level--;
        }
      }

      return rowsQ;
    }

    return rowsQ;
  }

  return async (dispatch: AppDispatch) => {
    try {
      dispatch(entitySlice.actions.fetching());
      const response = await axios.get<Rows[]>(`/v1/outlay-rows/entity/${eID}/row/list`);
      dispatch(entitySlice.actions.fetchSuccess(response.data));
      const rows = wrap(response.data);

      if (response.data.length == 0 || isEmpty === true) {
        const responseCreate = await axios.post<OutlayRowRequest>(
          `/v1/outlay-rows/entity/${eID}/row/create`,
          {
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
        );

        dispatch(
          entitySlice.actions.rowsAdd([
            { row: responseCreate.data.current, level: 0, isNew: true },
          ]),
        );
      } else {
        dispatch(entitySlice.actions.rowsModified(rows));
      }
    } catch (e) {
      handleError(dispatch, e as Error);
    }
  };
};

export const fetchUpdateRow = (DATA: Row) => {
  return async (dispatch: AppDispatch) => {
    try {
      const qwe = await axios.post<OutlayRowUpdateRequest>(
        `/v1/outlay-rows/entity/${eID}/row/${DATA.id}/update`,
        DATA,
      );
      dispatch(entitySlice.actions.rowUpdate(qwe.data.current));
    } catch (e) {
      handleError(dispatch, e as Error);
    }
  };
};

export const fetchAddRow = (DATA: Row) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<OutlayRowRequest>(
        `/v1/outlay-rows/entity/${eID}/row/create`,
        DATA,
      );
      dispatch(entitySlice.actions.rowsNew(response.data.current));
    } catch (e) {
      handleError(dispatch, e as Error);
    }
  };
};

export const fetchDeleteRow = (ID: Row | number | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      await axios.delete<RecalculatedRows>(`/v1/outlay-rows/entity/${eID}/row/${ID}/delete`);
    } catch (e) {
      handleError(dispatch, e as Error);
    }
  };
};

const handleError = (dispatch: AppDispatch, error: Error) => {
  dispatch(entitySlice.actions.fetchError(error));
};
