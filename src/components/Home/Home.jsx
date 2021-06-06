import {useState} from "react"
import { NavLink } from "react-router-dom";
import {FaTimes} from "react-icons/fa"
import "./Home.css";
import { BiCctv } from "react-icons/bi";
import { BsAlarm } from "react-icons/bs";
import { MdPhonelink } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { GiFireplace } from "react-icons/gi";
import { SiHomeassistant } from "react-icons/si";
import {IoIosWater} from "react-icons/io";
import {GiVacuumCleaner} from "react-icons/gi"
import {RiVirusFill} from "react-icons/ri"
import {RiRemoteControlFill} from "react-icons/ri"
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
import popimg7 from "../../img/products/nrich_right_1.png"
import popimg8 from "../../img/products/kisspng-vacuum-cleaner-electrolux-aeg-5ae5e060a3c0c7.4729987315250146246707.png"
import popimg9 from "../../img/products/perspective.png"
import popimg10 from "../../img/products/pngwing.com.png"


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
            <div className="icon_cont" onClick={()=>{OnClickHandler(popimg1,"CCTV camera surveillance system");PopUpDown()}}>
              <BiCctv className="icon" />
            </div>
            <div className="services_card_texts">
              <h3>CCTV camera surveillance system</h3>
            </div>
          </div>

          <div className="services_card" >
            <div className="icon_cont" >
              <BsAlarm className="icon" onClick={()=>{OnClickHandler(popimg2,"Anti theft alarm");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Anti theft alarm</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <MdPhonelink className="icon" onClick={()=>{OnClickHandler(popimg3,"Video door phone");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Video door phone</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <RiComputerLine className="icon" onClick={()=>{OnClickHandler(popimg4,"Biometric Attendance system");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Biometric Attendance system</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <SiHomeassistant className="icon" onClick={()=>{OnClickHandler(popimg5,"Home Automation");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Home Automation</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <GiFireplace className="icon" onClick={()=>{OnClickHandler(popimg6,"Video door phone");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Fire alarm system</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <IoIosWater className="icon" onClick={()=>{OnClickHandler(popimg7,"Aquaguard");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Aquaguard</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <GiVacuumCleaner className="icon" onClick={()=>{OnClickHandler(popimg8,"Vaccum Cleaner");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Vaccum Cleaner</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <RiVirusFill className="icon" onClick={()=>{OnClickHandler(popimg9,"Corona Guard");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Corona Guard</h3>
            </div>
          </div>

          <div className="services_card">
            <div className="icon_cont">
              <RiRemoteControlFill className="icon" onClick={()=>{OnClickHandler(popimg10,"Air Purifier");PopUpDown()}}/>
            </div>
            <div className="services_card_texts">
              <h3>Air Purifier</h3>
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
