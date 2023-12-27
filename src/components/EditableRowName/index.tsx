import { ChangeEvent } from "react";

import { Rows } from "@/models";

import "@/components/EditableRowName/style.scss";

interface Props {
  isEditMode: boolean;
  rowIDToEdit: number | undefined;
  handleChangeRow: (event: ChangeEvent<HTMLInputElement>, _rowID?: number | undefined) => void;
  handleKeyDownRow: (e: React.KeyboardEvent<HTMLInputElement>) => Rows | undefined;
  editedRow: Rows | undefined;
  rowState: Rows;
}

export function EditableRowName({
  isEditMode,
  rowIDToEdit,
  rowState,
  handleChangeRow,
  handleKeyDownRow,
  editedRow,
}: Props) {
  const isRowEditable = isEditMode && rowIDToEdit === rowState.row.id;
  const isRowNew = rowState.isNew;

  if (isRowEditable || isRowNew) {
    return (
      <input
        className="table-workName input"
        type="text"
        name="rowName"
        defaultValue={editedRow ? editedRow.row.rowName : rowState.row.rowName}
        onChange={(e) => handleChangeRow(e, rowState.row.id)}
        onKeyDown={(e) => handleKeyDownRow(e)}
      />
    );
  }

  return <div className="table-workName">{rowState.row.rowName}</div>;
}
