import React from "react";
import Header from "../header/Header";
import NavBar from "../navbar/NavBar";
import Background from "../background/Background";
import "./layout.css";

const Layout = ({ children }) => (
  <main className="main-layout">
    <div className="header-container">
      <Header />
    </div>
    <div className="navbar-container">
      <NavBar />
    </div>
    <div className="background-container">
      <Background>{children}</Background>
    </div>
  </main>
);

export default Layout;
