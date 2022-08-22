import React from "react";
import decoration1 from "../../assets/bg-decoration-1.svg";
import decoration2 from "../../assets/bg-decoration-2.svg";
import decoration3 from "../../assets/bg-decoration-3.svg";
import decoration4 from "../../assets/bg-decoration-4.svg";
import "./background.css";

const Background = ({ children }) => (
  <>
    <main className="layout-background">
      <img src={decoration1} alt="" className="decoration1" />
      <img src={decoration2} alt="" className="decoration2" />
      <img src={decoration3} alt="" className="decoration3" />
      <img src={decoration4} alt="" className="decoration4" />
      <section className="children-container">{children}</section>
    </main>
  </>
);

export default Background;
