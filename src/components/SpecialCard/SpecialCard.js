import { Link } from "react-router-dom";
import "./SpecialCard.css";

const SpecialCard = ({ meal }) => {
  return (
    <article className="special-card-wrapper">
      <img src={meal.image} alt={meal.name} />
      <div className="special-card-content">
        <div className="special-card-header">
          <h3>{meal.name}</h3>
          <span>{meal.price}</span>
        </div>
        <div className="special-card-text">
          <p>{meal.description}</p>
        </div>
      </div>
    </article>
  );
};

export default SpecialCard;
