import { NavLink, useNavigate } from "react-router-dom";

import MainMenu from "../../assets/icons/menu.svg?react";
import Back from "../../assets/icons/back.svg?react";

import "@/components/Header/style.scss";

export function Header() {
  const navigate = useNavigate();

  const handleClickRoot = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/");
  };

  const handleClickBack = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <header className="header">
      <nav className="nav">
        <MainMenu onClick={handleClickRoot} className="menuIcon" />
        <Back onClick={handleClickBack} className="backIcon" />

        <NavLink to="/view" className={({ isActive }) => (isActive ? "activeLink" : "link")}>
          Просмотр
        </NavLink>

        <NavLink to="/management" className={({ isActive }) => (isActive ? "activeLink" : "link")}>
          Управление
        </NavLink>
      </nav>
    </header>
  );
}
