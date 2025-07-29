// src/components/common/Footer.jsx
import React from "react";
import { FOOTER_TEXT } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">{FOOTER_TEXT}</p>
      </div>
    </footer>
  );
};

export default Footer;
