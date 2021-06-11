import {useState} from "react"
import {NavLink} from "react-router-dom"
import {FaTimes} from "react-icons/fa"
import "./Home.css";
import {BiPlusMedical} from "react-icons/bi"

import img1 from "../../img/view_package.png";
import img2 from "../../img/cctv-photo.jpg";

import brand1 from "../../img/brands/LOGO.e093234.png";
import brand2 from "../../img/brands/b6e737b893788014218db74932698b5e.w1440.h720.png";
import brand3 from "../../img/brands/brand5.png";
import brand4 from "../../img/brands/cp-plus.png";
import brand5 from "../../img/brands/D-Link-Logo.png";

import popimg1 from "../../img/products/toppng.com-cctv-camera-image-free-transparent-image-hd-camera-cctv-601x465.png"
import popimg2 from "../../img/products/favpng_alarm-device-mobile-phones-security-alarms-systems-gsm-anti-theft-system.png"
import popimg3 from "../../img/products/imgbin_video-door-phone-intercom-door-phone-wireless-system-png.png"
import popimg4 from "../../img/products/Daco_6043768.png"
import popimg5 from "../../img/products/imgbin_security-alarms-amp-systems-alarm-device-home-security-security-company-png.png"
import popimg6 from "../../img/products/pngegg (1).png"
import popimg7 from "../../img/products/pngaaa.com-3020313.png";


function Home() {
  const [Style,setStyle] = useState({display:"none"})

  const [Content,setContent] = useState({img:"",text:""})

  function PopUpDown()
  {
    if(Style.display==="none")
    setStyle({display:"block"})
    else
    setStyle({display:"none"}) 
  }

  function OnClickHandler(img,text)
  {
    setContent({img:img,text:text})
  }

  return (
    <div className="home_container">
      <div className="img_section">
        <img src={img2} alt="" />
        <div className="layer">
          <h3>
            <i>
              <span>MR</span> SECURITY SOLUTIONS
            </i>
          </h3>
          <p>(A Group of security proffessionals)</p>
          <p>We guarantee you total safety and happiness.</p>
        </div>
      </div>

      <div className="popup_card_container" style={Style} >
        <div className="cross" onClick={PopUpDown}><FaTimes className="icon"/></div>
        <img src={Content.img} alt={Content.text}/>
        <h1>{Content.text}</h1>
      </div>

      <div className="services_container">
        <h3>
          <span>---</span>Services<span>---</span>
        </h3>
        <div className="services_body" >

          <div className="services_card">
            <div className="icon_cont">
              <img src={popimg1} alt={popimg1} />
            </div>
            <div className="services_card_texts">
              <h3>CCTV camera</h3>
              <ul>
                {
                  [
                    "Prevent and Reduce Chances of Theft.",
                    "Real-time Video Surveillance.",
                    "Monitor High-risk Areas.",
                    "Resolve Internal Business Disputes."
                  ].map((lst,i)=><li key={i}>{lst}</li>)
                }
              </ul>
            </div>
          </div>

          <div className="services_card" >
            <div className="icon_cont" >
              <img src={popimg2} alt={popimg2} />
            </div>
            <div className="services_card_texts">
              <h3>Anti theft alarm</h3>
              <ul>
                {
                  [
                    "Security alarm systems deter criminal activity.",
                    "Security alarm systems protect property and valuables.",
                    "Security alarm systems help protect your home from intruders."
                  ].map((lst,i)=><li key={i}>{lst}</li>)
                }
              </ul>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
             <img src={popimg3} alt={popimg3} />
            </div>
            <div className="services_card_texts">
              <h3>Video door phone</h3>
              <ul>
                {
                  [
                    "Communicate with your visitor.",
                    "Records even if you are not at home.",
                    "Easy installation."
                  ].map((lst,i)=><li key={i}>{lst}</li>)
                }
              </ul>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <img src={popimg4} alt={popimg4} />
            </div>
            <div className="services_card_texts">
              <h3>Biometric Attendance</h3>
              <ul>
                {
                  [
                    "Get rid of paper based monitoring.",
                    "Save time.",
                    "Save money.",
                    "Better security.",
                    "Most accurate tracking solution."
                  ].map((lst,i)=><li key={i}>{lst}</li>)
                }
              </ul>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
            <img src={popimg5} alt={popimg5} />
            </div>
            <div className="services_card_texts">
              <h3>Home Automation</h3>
              <ul>
                {
                  ["Privacy", "Safety" , "Smart Home"].map((lst,i)=><li key={i}>{lst}</li>)
                }
              </ul>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
            <img src={popimg6} alt={popimg6} />
            </div>
            <div className="services_card_texts">
              <h3>Fire alarm system</h3>
              <ul>
                {
                  [
                    "Alarm systems are primarily designed to warn occupants of a fire so they can safely evacuate the premises."
                  ].map((lst,i)=><li key={i}>{lst}</li>)
                }
              </ul>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
            <img src={popimg7} alt={popimg7} />
            </div>
            <div className="services_card_texts">
              <h3>Remote Gate Automation</h3>
              <ul>
                {
                  ["Privacy", "Keeps Unauthorized Vehicles Out", "Safety"].map((lst,i)=><li key={i}>{lst}</li>)
                }
              </ul>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
            <NavLink to="/services"><BiPlusMedical className="icon"/></NavLink>
            </div>
            <div className="services_card_texts">
              <h3>Other Products</h3>
            </div>
          </div>

        </div>
      </div>

      <div className="home_about_container">
        <img src={img1} alt="" />
        <div className="about_layer">
          <div className="layer_texts">
            <h3>About : MR Security Solutions</h3>
            <p>
              You are secure with us. Whatever your networking needs, MR
              SECURITY SOLUTIONS will always provide the latest high-quality
              technologies and services at affordable prices. We'll help you
              Connect to More.{" "}
              <i>
                " We offer CCTV Camera, Security Alarm System, Video Door Phone
                and Gate & Home Automation - Sales, Installation & Services."
              </i>
            </p>
            <NavLink to="/about">Read more</NavLink>
          </div>
        </div>
      </div>

      <div className="home_brand_container">
        <h3>
          <span>---</span>Our Brands<span>---</span>
        </h3>
        <div className="brands_container">
          <li>
            <img src={brand2} alt="" />
          </li>
          <li>
            <img src={brand1} alt="" />
          </li>
          <li>
            <img src={brand3} alt="" />
          </li>
          <li>
            <img src={brand4} alt="" />
          </li>
          <li>
            <img
              src={brand5}
              alt=""
            />
          </li>
        </div>
      </div>
    </div>
  );
}

export default Home;
