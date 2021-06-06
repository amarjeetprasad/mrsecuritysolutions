import "./AboutUs.css";
import img from "../../img/brands/8.jpg";
import Logo from "../../img/logo.png";
function AboutUs() {
  return (
    <div className="aboutus_container">
      <div className="haeding">
        <h2>About - MR SECURITY SOLUTIONS</h2>
        <hr />
        <p>Home / About - MR SECURITY SOLUTIONS</p>
      </div>
      <div className="body" style={{ backgroundImage: `url(${img})` }}>
        <div className="layer">
          <div className="img">
            <img src={Logo} alt="" />
          </div>
          <div className="text_container">
            <p>
              "Our main focus is customer satisfaction"
              Whatever your networking needs, MR SECURITY SOLUTIONS will always
              provide the latest high-quality technologies and services at
              affordable prices. We'll help you Connect to More.
            </p>
            <p>
             "Our main focus is customer satisfaction"
              We are committed to providing its highest quality solutions and
              products with the latest technologies to enable end users to
              perform their business successfully and protect families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
