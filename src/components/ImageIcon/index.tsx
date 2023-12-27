import { MouseEventHandler } from "react";

import "@/components/ImageIcon/style.scss";

interface Props {
  icon: string | undefined;
  alt: string;
  className: string;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
  onMouseEnter?: MouseEventHandler<HTMLImageElement> | undefined;
}

export function ImageIcon({ icon, alt, className, onClick, onMouseEnter }: Props) {
  return (
    <img src={icon} alt={alt} className={className} onClick={onClick} onMouseEnter={onMouseEnter} />
  );
}
