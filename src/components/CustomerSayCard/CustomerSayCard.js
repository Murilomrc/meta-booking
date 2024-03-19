import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomerSayCard.css";

const ratingLevels = { 0.5: faStarHalfStroke, 1: faStar };

const CustomerSayCard = ({ customer }) => {
  return (
    <article className="customer-say-card-wrapper">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <span>
        {customer.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="xs"
          />
        ))}
      </span>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default CustomerSayCard;
