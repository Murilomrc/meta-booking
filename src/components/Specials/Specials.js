import "./Specials.css";
import SpecialCard from "../SpecialCard";

import {
  bruschettaImg,
  lemonDessertImg,
  greekSaladImg,
} from "../../assets/images";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImg,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImg,
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImg,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const Specials = () => {
  return (
    <section className="specials-wrapper">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
      </div>
      <div className="specials-cards">
        {meals.map((meal, index) => (
          <SpecialCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
