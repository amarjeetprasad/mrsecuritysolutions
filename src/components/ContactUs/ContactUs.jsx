import "./ContactUs.css";
import { ImLocation } from "react-icons/im";

const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.517338757241!2d75.77747916092984!3d11.260966882992488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65936d592eae9%3A0xf66fcf65de2944aa!2s6%2C%20YMCA%20Cross%20Rd%2C%20Mananchira%2C%20Kozhikode%2C%20Kerala%20673001!5e0!3m2!1sen!2sin!4v1622537652874!5m2!1sen!2sin";

function ContactUs() {
  return (
    <div className="contactus-container">
      <div className="haeding">
        <h2>Contact Us - MR SECURITY SOLUTIONS</h2>
        <hr />
        <p>Home / contact-us - MR SECURITY SOLUTIONS</p>
      </div>
      <div className="body">
        <p>
          MR SECURITY SOLUTIONS is introducing all the latest technologies in
          automation and embedded systems which are not much familiar in gods
          own country. As per the name of the company indicates, we are focusing
          on research and updates of modern technologies in advance. In this
          wing the company deal with no.1 global vendors of security systems.
          Eureka Forbes, Hikvision, Hifocas, Bosch, Honeywell, Unicam, CP+ etc are the leading
          manufacturing companies in the field and, this company is using their
          products which are more reliable and guarantee assured.
        </p>
        <div className="add">
          <ImLocation className="icon" />
          <p>
            6 / 311 , Sara Complex , Nr. Axis Bank & Marina Residency Hotel ,
            YMCA Cross Road Calicut - 673001
          </p>
        </div>

        <iframe src={map} title="google-map"></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
