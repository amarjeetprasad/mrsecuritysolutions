import "./ServicesCard.css";
import { StyleRoot } from "radium";

function ServicesCard({ dir, img, title, text }) {
  const sty = {
    "@media screen and (max-width:850px)": { flexDirection: "column-reverse" }
  };

  return dir === "right" ? (
    <StyleRoot >
      <div className="ServicesCard_container" style={sty}>
        <div className="about">
          <h3>{title}</h3>
          <ul>
            {text.map((txt,i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
        </div>
        <img src={img} alt="" />
      </div>
    </StyleRoot>
  ) : (
    <StyleRoot >
      <div className="ServicesCard_container">
        <img src={img} alt="" />
        <div className="about">
          <h3>{title}</h3>
          <ul>
            {text.map((txt,i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
        </div>
      </div>
    </StyleRoot>
  );
}

export default ServicesCard;
