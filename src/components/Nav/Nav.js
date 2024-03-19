import React from "react";
import { useLocation, Link } from "react-router-dom";

const Nav = () => {
  const menuLinks = [
    {
      id: "home",
      link: "",
      label: "Home",
    },
    {
      id: "booking",
      link: "booking",
      label: "Booking",
    },
  ];

  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        {menuLinks.map((menuLink) => (
          <li key={menuLink.id}>
            <Link
              className={pathname === menuLink.link ? "current-page" : ""}
              to={menuLink.link}
            >
              {menuLink.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
