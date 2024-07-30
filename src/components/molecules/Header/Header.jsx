import React, { useEffect, useState } from "react";
import Container from "../../foundations/container/container";
import "./Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const bodyel = document.body;
    if (bodyel) {
      if (menu) {
        bodyel.style.overflow = "hidden";
      } else {
        bodyel.style.overflow = "unset";
      }
    }
  }, [menu]);

  return (
    <>
      <header className="header-cont">
        <Container>
          <div className="header">
            <span>GD.</span>
            <div className="header-list">
              <p>About</p>
              <p>Services</p>
              <p>Our Work</p>
              <a href="/">Enrol Now</a>
            </div>
            <div className="hamburger" onClick={() => setMenu(true)}>
              {menuicon}
            </div>
          </div>
        </Container>
      </header>

      {menu && (
        <div className="hamburger-menu">
          <div className="close-icon" onClick={() => setMenu(false)}>
            {closeicon}
          </div>
          <div className="options">
            <p>About</p>
            <p>Services</p>
            <p>Our Work</p>
            <a href="/">Enrol Now</a>
          </div>
        </div>
      )}
    </>
  );
};

const closeicon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10L30 30M10 30L30 10L10 30Z"
      stroke="white"
      stroke-width="3.55754"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const menuicon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.3335 26.6667H6.66683M33.3335 13.3334H6.66683H33.3335Z"
      stroke="#023047"
      stroke-width="4.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Header;
