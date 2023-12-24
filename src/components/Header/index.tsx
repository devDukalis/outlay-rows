import { useNavigate } from "react-router-dom";

import { Link } from "@/components/Link";

import Menu from "../../assets/icons/menu.svg?react";
import Back from "../../assets/icons/back.svg?react";

import "@/components/Header/style.scss";

export function Header() {
  const navigate = useNavigate();

  const handleClickRoot = () => {
    navigate("/");
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Menu onClick={handleClickRoot} className="menuIcon" />
        <Back onClick={handleClickBack} className="backIcon" />

        <Link linkTo="/view" title="Просмотр" style={{ marginRight: "8px" }} />
        <Link linkTo="/management" title="Управление" />
      </nav>
    </header>
  );
}
