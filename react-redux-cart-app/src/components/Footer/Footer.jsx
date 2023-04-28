import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={Style.footer}>
      <h2>Patel Shopping Cart</h2>
      <p>
        &copy; <span>{year}</span> - All Rights Copyright Reserved To{" "}
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karmkumar-patel/">
          Karm Patel
        </a>
      </p>
    </footer>
  );
}
