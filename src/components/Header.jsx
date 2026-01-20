
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">PhantomTravel</div>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/about">Про нас</Link>
        <Link to="/team">Команда</Link>
        <Link to="/gallery">Галерея</Link>
        <Link to="/contact">Контакти</Link>
      </nav>
    </header>
  );
}
