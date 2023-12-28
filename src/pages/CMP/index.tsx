import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchEntity, fetchDeleteRow, fetchAddRow } from "@/redux/actions";
import { rowsAdd, deleteRow } from "@/redux/features/entitySlice";

import { FacilityBuildOut } from "@/components/FacilityBuildOut";
import { Fail } from "@/components/Fail";
import { Spinner } from "@/components/Spinner";
import { TableTitle } from "@/components/TableTitle";
import { TableColumns } from "@/components/TableColumns";

import { Row, Rows } from "@/models";

import "@/pages/CMP/style.scss";

export default function CMP() {
  const dispatch = useAppDispatch();

  const { error, loading, rows } = useAppSelector((state) => state.entities);
  const [isEditMode, setEditMode] = useState(false);
  const [isOpenMode, setOpenMode] = useState(true);
  const [rowIDToEdit, setRowIDToEdit] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchEntity(false));
  }, [dispatch]);

  const handleRemoveRow = (rowID: Row | number | undefined) => {
    let count: number = 1;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].row.id === rowID) {
        for (let j = i + 1; j < rows.length; j++) {
          if (rows[i].level < rows[j].level) {
            count++;
          } else break;
        }

        dispatch(deleteRow({ i, count }));
        break;
      }
    }

    dispatch(fetchDeleteRow(rowID));

    if (rows.length - count === 0) {
      dispatch(fetchEntity(true));
    }
  };

  const handleAddRow = (rowID: number) => {
    setOpenMode(true);
    setEditMode(true);

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].row.id === rowID) {
        const objCopy: Rows[] = structuredClone(rows);

        objCopy.splice(i + 1, 0, {
          row: {
            id: 0,
            rowName: "",
            salary: 0,
            equipmentCosts: 0,
            overheads: 0,
            parentId: rowID,
            estimatedProfit: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            supportCosts: 0,
            total: 0,
          },

          level: objCopy[i].level + 1,
          isNew: true,
        });

        dispatch(fetchAddRow(objCopy[i + 1].row));
        dispatch(rowsAdd(objCopy));
      }
    }
  };

  return (
    <div className="table">
      <TableTitle />
      <TableColumns />

      {loading && <Spinner />}
      {error && <Fail />}

      {!error && !loading && (
        <div>
          {rows.map((row: Rows) => (
            <FacilityBuildOut
              key={row.row.id}
              row={row}
              isEditMode={isEditMode}
              setEditMode={setEditMode}
              rowIDToEdit={rowIDToEdit}
              setRowIDToEdit={setRowIDToEdit}
              isOpenMode={isOpenMode}
              setOpenMode={setOpenMode}
              handleRemoveRow={handleRemoveRow}
              handleAddRow={handleAddRow}
            />
          ))}
        </div>
      )}
    </div>
  );
}
