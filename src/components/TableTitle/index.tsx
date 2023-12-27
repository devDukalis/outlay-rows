import "@/components/TableTitle/style.scss";

interface Props {
  value?: string;
}

export function TableTitle({ value = "Строительно-монтажные работы" }: Props) {
  return (
    <div className="title-wrapper">
      <h1 className="h1-title">{value}</h1>
    </div>
  );
}
