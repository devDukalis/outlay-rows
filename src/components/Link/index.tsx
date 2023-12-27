import { NavLink } from "react-router-dom";

import "@/components/Link/style.scss";

interface Props {
  title?: string;
  linkTo: string;
  style?: React.CSSProperties;
  isDecorated?: boolean;
}

export function Link({ title = "MyLink", linkTo, style, isDecorated = false }: Props) {
  const activeLinkClassName = (props: { isActive: boolean }) => {
    const baseClassName = props.isActive ? "active-link" : "link";

    return isDecorated ? `${baseClassName} decorated-link` : baseClassName;
  };

  return (
    <NavLink to={linkTo} className={activeLinkClassName} style={style}>
      {title}
    </NavLink>
  );
}
