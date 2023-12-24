import { NavLink } from "react-router-dom";

import "@/components/Link/style.scss";

interface Props {
  title?: string;
  linkTo: string;
  style?: React.CSSProperties;
  isDecorated?: boolean;
}

export function Link({ title = "MyLink", linkTo, style, isDecorated = true }: Props) {
  const activeLinkClassName = (props: { isActive: boolean }) => {
    const baseClassName = props.isActive ? "activeLink" : "link";

    return isDecorated ? `${baseClassName} decoratedLink` : baseClassName;
  };

  return (
    <NavLink to={linkTo} className={activeLinkClassName} style={style}>
      {title}
    </NavLink>
  );
}
