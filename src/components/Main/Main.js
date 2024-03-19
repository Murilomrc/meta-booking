import React, { useReducer } from "react";

import CallToAction from "../CallToAction/CallToAction";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import Chicago from "../Chicago";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
};

export default Main;
