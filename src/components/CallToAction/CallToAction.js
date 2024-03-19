import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.css";

import { chefs1Img } from "../../assets/images";

const CallToAction = () => {
  return (
    <section className="call-to-action-wrapper">
      <div className="call-to-action-text">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <Link className="button-primary" to={"/"}>
          Reserve a table
        </Link>
      </div>
      <img className="hero-image" alt="Restaurant food" src={chefs1Img} />
    </section>
  );
};

export default CallToAction;
