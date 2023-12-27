import { TableColumn } from "@/components/TableColumn";

import { titles } from "@/components/TableColumns/temp-data";

import "@/components/TableColumns/style.scss";

export function TableColumns() {
  return (
    <div className="table-info-title">
      {titles.map((title) => (
        <TableColumn key={title.id} value={title.value} className={title.class} />
      ))}
    </div>
  );
}
