import "./MiniFooter.css";
import { NavLink } from "react-router-dom";

function MiniFooter() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="minifooter_container">
      <p className="copyright">
        &#169; {year} MR Security Solutions All rights reserved
      </p>
      <p className="navs">
        <NavLink className="navbar" to="/">
          Home
        </NavLink>
        <NavLink className="navbar" to="/about">
          About Us
        </NavLink>
        <NavLink className="navbar" to="/services">
          Services
        </NavLink>
        <NavLink className="navbar" to="/brands">
          Brands
        </NavLink>
        <NavLink className="navbar" to="/contact">
          Contact Us
        </NavLink>
      </p>
    </div>
  );
}
export default MiniFooter;
