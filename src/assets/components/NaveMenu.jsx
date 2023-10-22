import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu() {
  const navclass =
    "h-full w-[5rem] bg-[#11113a] rounded-md nav overflow-hidden ";
  const ulclass =
    "items-center navul p-[0.5rem] py-[1.3rem] h-full flex flex-col justify-between ";

  return (
    <nav className={navclass}>
      <ul className={ulclass}>
        <li>
          <span>Home</span>{" "}
          <NavLink activeClassName="active" to="/home">
            <i class="fa-solid fa-house"></i>
          </NavLink>{" "}
        </li>
        <li>
          <span>About</span>
          <NavLink activeClassName="active" to='/about' >
            <i class="fa-solid fa-person-dots-from-line"></i>
          </NavLink>
        </li>
        <li>
          <span>Service</span>
          <NavLink activeClassName="active" to='/service'>
            <i class="fa-solid fa-laptop-code"></i>
          </NavLink>
        </li>
        <li>
          <span>Projects</span>
          <NavLink activeClassName="active" to='/projects'>
            <i class="fa-solid fa-briefcase"></i>
          </NavLink>
        </li>
        <li>
          <span>Contact</span>
          <NavLink activeClassName="active" to='/contact'>
            <i class="fa-solid fa-address-card"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
