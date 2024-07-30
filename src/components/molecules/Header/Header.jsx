import React from "react";
import Container from "../../foundations/container/container";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-cont">
      <Container>
        <div className="header">
          <span>GD.</span>
          <div>
            <p>About</p>
            <p>Services</p>
            <p>Our Work</p>
            <a href="/">Enrol Now</a>
          </div>
          <div clolprassName="hamburger">{icon}</div>
        </div>
      </Container>
    </header>
  );
};

const icon = (
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
