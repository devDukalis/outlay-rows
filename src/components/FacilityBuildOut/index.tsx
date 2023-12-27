import { ChangeEvent, SetStateAction, useState } from "react";

import { useAppDispatch } from "@/redux/hooks";
import { fetchUpdateRow } from "@/redux/actions";

import { EditableRowName } from "@/components/EditableRowName";
import { EditableTableCell } from "@/components/EditableTableCell";
import { ImageIcon } from "@/components/ImageIcon";

import deleteDocumentIcon from "@/assets/icons/deleteDocument.svg";
import newDocumentIcon from "@/assets/icons/newDocument.svg";

import { tempData } from "@/components/FacilityBuildOut/temp-data";

import { Row, Rows } from "@/models";

import "@/components/FacilityBuildOut/style.scss";

interface Props {
  row: Rows;
  isEditMode: boolean;
  setEditMode(active: boolean): void;
  rowIDToEdit: number | undefined;
  setRowIDToEdit(active: SetStateAction<number>): void;
  isOpenMode: boolean;
  setOpenMode(active: boolean): void;
  handleRemoveRow(active: number): void;
  handleAddRow(active: number): void;
}

export function FacilityBuildOut({
  row,
  isEditMode,
  setEditMode,
  rowIDToEdit,
  setRowIDToEdit,
  isOpenMode,
  setOpenMode,
  handleRemoveRow,
  handleAddRow,
}: Props) {
  const dispatch = useAppDispatch();

  const [rowsState, setRowsState] = useState(row);
  let editedRow: Rows | undefined = rowsState;

  const handleDoubleClickRow = (rowID: number) => {
    if (!isEditMode) {
      setEditMode(true);
      editedRow = rowsState;
      setRowIDToEdit(rowID);
    }
  };

  const handleChangeRow = (
    event: ChangeEvent<HTMLInputElement>,
    _rowID: Row | number | undefined,
  ) => {
    event.preventDefault();

    const { name: fieldName, value } = event.target;
    const rowCopy: Rows = structuredClone(editedRow)!;

    updateRowValue(rowCopy, fieldName, value);

    editedRow = rowCopy;
  };

  const updateRowValue = (row: Rows, fieldName: string, value: string) => {
    switch (fieldName) {
      case "rowName":
        row.row.rowName = value;
        break;
      case "salary":
        row.row.salary = Number(value);
        break;
      case "equipmentCosts":
        row.row.equipmentCosts = Number(value);
        break;
      case "overheads":
        row.row.overheads = Number(value);
        break;
      case "estimatedProfit":
        row.row.estimatedProfit = Number(value);
        break;
      default:
        break;
    }
  };

  const handleKeyDownRow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditMode(false);

      if (!editedRow) {
        return rowsState;
      }

      editedRow.isNew = false;
      dispatch(fetchUpdateRow(editedRow.row));
      setRowsState(editedRow);

      editedRow = undefined;
      setRowIDToEdit(0);
      setOpenMode(true);
    }
  };

  const editableCells = tempData.map((value) => (
    <EditableTableCell
      key={value.id}
      isEditMode={isEditMode}
      rowIDToEdit={rowIDToEdit}
      rowsState={rowsState}
      handleChangeRow={handleChangeRow}
      handleKeyDownRow={handleKeyDownRow}
      value={value.title}
      className={(0 + 3).toString()}
    />
  ));

  const levelClassName = (level: number) => {
    if (level >= 1 && level <= 4) {
      return `table-level connection-line${level}`;
    }

    return "table-level";
  };

  return (
    <>
      <div
        className={
          rowIDToEdit !== rowsState.row.id ? `table-info level-${rowsState.level}` : "table-info "
        }
        onDoubleClick={() => handleDoubleClickRow(rowsState.row.id)}>
        <div className={levelClassName(rowsState.level)}>
          {!isOpenMode && !isEditMode && !rowsState.isNew ? (
            <div
              className={`table-level-container${row.level}`}
              onMouseLeave={() => setOpenMode(true)}>
              <ImageIcon
                icon={newDocumentIcon}
                alt="new document icon"
                className={`table-img0`}
                onClick={() => handleAddRow(rowsState.row.id)}
              />

              <ImageIcon
                icon={deleteDocumentIcon}
                alt="delete document icon"
                className="table-img0"
                onClick={() => handleRemoveRow(rowsState.row.id)}
              />
            </div>
          ) : (
            <ImageIcon
              icon={newDocumentIcon}
              alt="new document icon"
              className={`table-img${row.level}`}
              onMouseEnter={() => setOpenMode(false)}
            />
          )}
        </div>

        <EditableRowName
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          handleChangeRow={handleChangeRow}
          handleKeyDownRow={handleKeyDownRow}
          editedRow={editedRow}
          rowState={rowsState}
        />

        {editableCells}
      </div>
    </>
  );
}
