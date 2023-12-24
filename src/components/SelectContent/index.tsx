import ArrowDownIcon from "../../assets/icons/arrow.svg?react";

import "@/components/SelectContent/style.scss";

interface Props {
  title?: string;
  subtitle?: string;
}

export function SelectContent({ title = "Название проекта", subtitle = "Аббревиатура" }: Props) {
  return (
    <div className="asideSelect">
      <div className="selectContent">
        <div className="selectTitle">{title}</div>
        <div className="selectSubtitle">{subtitle}</div>
      </div>

      <ArrowDownIcon className="selectArrow" />
    </div>
  );
}
