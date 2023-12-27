import "@/components/TableColumn/style.scss";

interface Props {
  value: string;
  className?: string;
}

export function TableColumn({ value, className }: Props) {
  return <div className={`table-${className}`}>{value}</div>;
}
