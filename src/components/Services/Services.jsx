import "./Services.css";
import ServicesCard from "../ServicesCard/ServicesCard";
import img8 from "../../img/products/nrich_right_1.png"
import img10 from "../../img/products/IMG-20210606-WA0010_1_-removebg-preview.png"
import img11 from "../../img/products/perspective.png"
import img12 from "../../img/products/IMG-20210606-WA0011_1_-removebg-preview.png"

//
function Services() {
  const lst7 = [
    "Separating salts and heavy metals",
    "these purifiers improve the taste of the water as well",
  ];


  const lst9 = [
    "Capture Excess Pet Hair",
    "Freshen Upholstery, Pillows, and Carpets",
    "Reduce Indoor Allergens",
    "Recover Small Items"
  ];

  const lst10 = [
    "CORONAGUARD aims to provide real time protection against infection from coronavirus in closed spaces. This is a revolutionary virulence prevention device which promises to neutralize and disable 99.9% of coronavirus in the air surfaces, within closed indoor spaces."
  ]

  const lst11 = [
    "Air purifiers can refresh stale air, reducing the chances of health issues caused by indoor pollutants, which can trigger respiratory infections, neurological problems, or aggravate symptoms in asthma sufferers. Quality air purifiers eliminate several types of indoor air pollutants, keeping us healthy."
  ]
  return (
    <div className="Services_container">
      <div className="heading">
        <h2>MR SECURITY SOLUTIONS - provides</h2>
        <hr />
        <p>Home / services</p>
      </div>
      <div className="services_body">
        <div className="services_cards">
          <ServicesCard
            dir="right"
            title="Vaccum Cleaner"
            img={img10}
            text={lst9}
          />
          <ServicesCard
            dir="left"
            title="Corona Guard"
            img={img11}
            text={lst10}
          />
          <ServicesCard
            dir="right"
            title="Air Purifier"
            img={img12}
            text={lst11}
          />
           <ServicesCard
            dir="left"
            title="Aquaguard"
            img={img8}
            text={lst7}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
