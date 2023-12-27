import { Link } from "@/components/Link";

import Menu from "../../assets/icons/menu.svg?react";
import Back from "../../assets/icons/back.svg?react";

import "@/components/Header/style.scss";

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Menu className="menu-icon" />
        <Back className="back-icon" />

        <Link linkTo="/" title="Просмотр" style={{ marginRight: "8px" }} isDecorated />
        <Link linkTo="/management" title="Управление" />
      </nav>
    </header>
  );
}
