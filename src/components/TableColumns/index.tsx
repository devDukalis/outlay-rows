import { TableColumn } from "@/components/TableColumn";

import "@/components/TableColumns/style.scss";

const titles = [
  { value: "Уровень", id: 1, class: "level" },
  { value: "Наименование работ", id: 2, class: "workName" },
  { value: "Основная з/п", id: 3, class: "3" },
  { value: "Оборудование", id: 4, class: "4" },
  { value: "Накладные расходы", id: 5, class: "5" },
  { value: "Сметная прибыль", id: 6, class: "6" },
];

export function TableColumns() {
  return (
    <div className="table-info-title">
      {titles.map((title) => (
        <TableColumn key={title.id} value={title.value} className={title.class} />
      ))}
    </div>
  );
}
