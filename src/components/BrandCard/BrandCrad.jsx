import "./BrandCard.css";

function BrandCard({ img, title, text }) {
  return (
    <div className="BrandCard-container">
      <img src={img} alt={title} />
    </div>
  );
}
export default BrandCard;
