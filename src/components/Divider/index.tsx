import "@/components/Divider/style.scss";

interface Props {
  style?: React.CSSProperties;
}

export function Divider({ style }: Props) {
  return <div className="divider" style={style}></div>;
}
