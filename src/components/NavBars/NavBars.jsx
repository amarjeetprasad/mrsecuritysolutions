import { useState } from "react";

import "./NavBars.css";
import { NavLink } from "react-router-dom";
import img from "../../img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBars() {
  const [isShown, setIsShown] = useState(false);
  const [Right, setRight] = useState({ top: "-400%" });

  function clickHandler() {
    if (isShown) {
      setIsShown(false);
      setRight({ top: "-400%" });
    } else {
      setIsShown(true);
      setRight({ top: "15vh" });
    }
  }

  return (
    <div className="NavBar_container">
      <div className="logo">
        <img src={img} alt="logo" />
      </div>
      {!isShown ? (
        <FaBars className="icon" onClick={clickHandler} />
      ) : (
        <FaTimes className="icon" onClick={clickHandler} />
      )}
      <ul style={Right}>
        <li>
          <NavLink className="nav_links" to="/" onClick={clickHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_links" to="/about" onClick={clickHandler}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_links" to="/services" onClick={clickHandler}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_links" to="/brands" onClick={clickHandler}>
            Brands
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_links" to="/contact" onClick={clickHandler}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBars;
