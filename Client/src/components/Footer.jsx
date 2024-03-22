import React from "react";
import logo from "../images/hitler.jpg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="footerLogo" />
      <span>
        Made with <b>React.js</b>
      </span>
    </footer>
  );
}

export default Footer;
