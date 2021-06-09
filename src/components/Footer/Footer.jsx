import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import "./Footer.css";

import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import {FaWhatsappSquare} from "react-icons/fa"

function Footer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICES_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_API)
      .then((result) => {
          swal({
            title: "Message Sent !",
            text: "Thank you for contacting us!",
            icon: "success",
            button: "OK!",
          });
      }, (error) => {
          swal({
            title: "Sorry Failed !",
            text: "please try again later!",
            icon: "warning",
            button: "OK!",
          });
      });

      e.target.reset();
  }


  return (
    <div className="footer_container">
      <div className="left">
        <div className="list">
          <FaWhatsappSquare className="icon" style={{color:"#1b9a59"}}/>
          <p>+91-9605 065 387</p>
        </div>
        <div className="list">
          <MdEmail className="icon" style={{color:"#fce8e6"}}/>
          <p>mrsolutionsclt@gmail.com</p>
        </div>
        <div className="list">
          <ImLocation className="icon" />
          <p>
            A unit of MR Enterprises .<br />6 / 311 , Sara Complex , Nr. Axis
            Bank & Marina Residency Hotel , YMCA Cross Road Calicut - 673001
          </p>
        </div>
      </div>
      <div className="right">
        <form
        onSubmit={sendEmail}
        >
          <h1>Enquiry Form</h1>
          <input type="text" name="name" placeholder="Name.." required />
          <input type="text" name="mobile" placeholder="Mobile No.." required />
          <input type="text" name="email" placeholder="Email.." />
          <input type="text" name="address" placeholder="Address.." />
          <input
            type="text"
            name="subject"
            placeholder="Subject of Enquiry.."
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Meassage.."
          ></textarea>
          <input type="submit" name="" id="" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Footer;
