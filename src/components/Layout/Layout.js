import React from "react";
import PropTypes from "prop-types";

import NavBar from "Components/NavBar/NavBar";

import { container, main } from "./style.css";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Header />
      <NavBar />
      <main className={main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
