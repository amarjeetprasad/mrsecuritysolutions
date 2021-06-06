import "./Brands.css";
import BrandCard from "../BrandCard/BrandCrad";

import brand1 from "../../img/brands/LOGO.e093234.png";
import brand2 from "../../img/brands/b6e737b893788014218db74932698b5e.w1440.h720.png";
import brand3 from "../../img/brands/brand5.png";
import brand4 from "../../img/brands/cp-plus.png";
import brand5 from "../../img/brands/D-Link-Logo.png";

function Brands() {
  return (
    <div className="Brands-container">
      <div className="haeding">
        <h2>Brands - MR SECURITY SOLUTIONS</h2>
        <hr />
        <p>Home / brands - MR SECURITY SOLUTIONS</p>
      </div>
      <div className="Brands-BrandCard-container">
        <BrandCard img={brand1} title="dahua" />
        <BrandCard img={brand2} title="eureka forbes" />
        <BrandCard img={brand3} title="hikvision" />
        <BrandCard img={brand4} title="cp plus" />
        <BrandCard img={brand5} title="d link" />
      </div>
    </div>
  );
}

export default Brands;
