import "./MiniFooter.css";
import { a } from "react-router-dom";

function MiniFooter() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="minifooter_container">
      <p className="copyright">
        &#169; {year} MR Security Solutions All rights reserved
      </p>
      <p className="navs">
        <a className="navbar" href="/">
          Home
        </a>
        <a className="navbar" href="/about">
          About Us
        </a>
        <a className="navbar" href="/services">
          Services
        </a>
        <a className="navbar" href="/brands">
          Brands
        </a>
        <a className="navbar" href="/contact">
          Contact Us
        </a>
      </p>
    </div>
  );
}
export default MiniFooter;
