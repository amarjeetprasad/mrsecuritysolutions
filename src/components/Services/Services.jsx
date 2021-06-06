import "./Services.css";
import ServicesCard from "../ServicesCard/ServicesCard";
import img1 from "../../img/products/toppng.com-hik-camera-hikvision-cctv-camera-693x402.png";
import img2 from "../../img/products/imgbin_video-door-phone-intercom-door-phone-wireless-system-png.png";
import img3 from "../../img/products/favpng_alarm-device-mobile-phones-security-alarms-systems-gsm-anti-theft-system.png";
import img4 from "../../img/products/Daco_6043768.png";
import img5 from "../../img/products/imgbin_security-alarms-amp-systems-alarm-device-home-security-security-company-png.png";
import img6 from "../../img/products/pngegg (1).png";
import img8 from "../../img/products/pngaaa.com-3020313.png";
import img10 from "../../img/products/kisspng-vacuum-cleaner-electrolux-aeg-5ae5e060a3c0c7.4729987315250146246707.png"
import img9 from "../../img/products/nrich_right_1.png"
import img11 from "../../img/products/perspective.png"
import img12 from "../../img/products/pngwing.com.png"

//
function Services() {
  const lst1 = [
    "Get rid of paper based monitoring.",
    "Save time.",
    "Save money.",
    "Better security.",
    "Most accurate traking solution."
  ];
  const lst2 = [
    "Security alarm systems deter criminal activity.",
    "Security alarm systems protect property and valuables.",
    "Security alarm systems help protect your home from intruders."
  ];

  const lst3 = [
    "Prevent and Reduce Chances of Theft.",
    "Real-time Video Surveillance.",
    "Monitor High-risk Areas.",
    "Resolve Internal Business Disputes."
  ];

  const lst4 = [
    "Communicate with your visitor.",
    "Records even if you are not at home.",
    "Easy installation."
  ];

  const lst5 = [
    "Alarm systems are primarily designed to warn occupants of a fire so they can safely evacuate the premises."
  ];

  const lst6 = ["Prevent Theft", "Stopping Theft"];

  const lst7 = ["Privacy", "Keeps Unauthorized Vehicles Out", "Safety"];


  const lst8 = [
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
            title="Full HD CCTV Cameras"
            img={img1}
            text={lst3}
          />
          <ServicesCard
            dir="left"
            title="Video Door Phone"
            img={img2}
            text={lst4}
          />
          <ServicesCard
            dir="right"
            title="Biometric Attendance System"
            img={img4}
            text={lst1}
          />
          <ServicesCard
            dir="left"
            title="Security Alarm System"
            img={img5}
            text={lst2}
          />
          <ServicesCard
            dir="right"
            title="Fire Alarm Aystem "
            img={img6}
            text={lst5}
          />
          <ServicesCard
            dir="left"
            title="Anti Theft Alarm "
            img={img3}
            text={lst6}
          />
          <ServicesCard
            dir="right"
            title="Remote Gate Automation"
            img={img8}
            text={lst7}
          />
          <ServicesCard
            dir="left"
            title="Aquaguard"
            img={img9}
            text={lst8}
          />
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
        </div>
      </div>
    </div>
  );
}

export default Services;
