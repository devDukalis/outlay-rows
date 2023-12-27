import ArrowDownIcon from "../../assets/icons/arrow.svg?react";

import "@/components/SelectContent/style.scss";

interface Props {
  title?: string;
  subtitle?: string;
}

export function SelectContent({ title = "Название проекта", subtitle = "Аббревиатура" }: Props) {
  return (
    <div className="aside-select">
      <div className="select-content">
        <div className="select-title">{title}</div>
        <div className="select-subtitle">{subtitle}</div>
      </div>

      <ArrowDownIcon className="select-arrow" />
    </div>
  );
}
