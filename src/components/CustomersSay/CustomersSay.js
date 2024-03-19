import React from "react";
import "./CustomersSay.css";
import CustomerSayCard from "../CustomerSayCard";
import {
  customer1Img,
  customer2Img,
  customer3Img,
  customer4Img,
} from "../../assets/images";

const customers = [
  {
    fullName: "Maria Sanchez",
    image: customer1Img,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Antony Clifton",
    image: customer2Img,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Tamika Jackson",
    image: customer3Img,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Brandon Ming",
    image: customer4Img,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const CustomersSay = () => {
  return (
    <section className="customers-say-wrapper">
      <div>
        <h2>What people say about us!</h2>
        <div className="customers-say-cards">
          {customers.map((customer, index) => (
            <CustomerSayCard key={index} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
