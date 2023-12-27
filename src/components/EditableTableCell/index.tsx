import { ChangeEvent, ReactNode } from "react";

import { Row, Rows } from "@/models";

import "@/components/EditableTableCell/style.scss";

interface Props {
  isEditMode: boolean;
  rowIDToEdit: number | undefined;
  rowsState: Rows;
  handleChangeRow: (
    event: ChangeEvent<HTMLInputElement>,
    _rowID?: Row | number | undefined,
  ) => void;
  handleKeyDownRow: (e: React.KeyboardEvent<HTMLInputElement>) => Rows | undefined;
  value: number | string;
  className: string | undefined;
}

export function EditableTableCell({
  isEditMode,
  rowIDToEdit,
  rowsState,
  handleChangeRow,
  handleKeyDownRow,
  value,
  className,
}: Props) {
  const isEditing = isEditMode && rowIDToEdit === rowsState.row.id;

  if (isEditing || rowsState.isNew) {
    return (
      <input
        className={`table-${className} input`}
        type="number"
        defaultValue={rowsState.row[value] as string | number | readonly string[] | undefined}
        name={value.toString()}
        onChange={(e) => handleChangeRow(e, rowsState.row.id)}
        onKeyDown={(e) => handleKeyDownRow(e)}
      />
    );
  }

  return <div className={`table-${className}`}>{rowsState.row[value] as ReactNode}</div>;
}
