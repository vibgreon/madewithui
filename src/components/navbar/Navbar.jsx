import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// import logoLight from "../../../public/logoMadewithui/light.svg";
import Logo from "../logo/Logo";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

import Button from "../../components/button/button";

import NavbarItem from "./NavbarItem.json";
var data = NavbarItem;

export default function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="navbar__wrapper">
        <div className="nav__cont">
          <div className="nav__logo__cont">
            <NavLink to={"/"}>
              <Logo />
            </NavLink>
            <div className="nav__bar"></div>
            <div
              className="nav__icons"
              onClick={() => {
                setClick(!click);
              }}
            >
              {click == false ? <img src={menu} /> : <img src={close} />}
            </div>
          </div>
          <div className="nav__item__cont extra" >
            {data.map((item) => {
              return (
                <NavLink to={`/${item.index}`} key={item.id}>
                  <div className="nav__item">{item.index}</div>
                </NavLink>
              );
            })}
            <NavLink to={"/contact"}>
              <Button className="button" text={"Curious?"} />
            </NavLink>
          </div>
          { click && <div className="nav__item__cont" >
            {data.map((item) => {
              return (
                <NavLink to={`/${item.index}`} key={item.id}>
                  <div className="nav__item">{item.index}</div>
                </NavLink>
              );
            })}
            <NavLink to={"/contact"}>
              <Button className="button" text={"Curious?"} />
            </NavLink>
          </div>}
        </div>
      </div>
    </>
  );
}
