import React from "react";
import LittleLemonLogo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      {/* TODO Adicionar logotipo do Little Lemon */}
      <img src={LittleLemonLogo} alt="Little Lemon logo" />
    </header>
  );
};

export default Header;
