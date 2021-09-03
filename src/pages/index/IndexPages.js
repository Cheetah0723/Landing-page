import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sponsors from "../../components/sponsors/Sponsors";
import Home from "../../components/home/Home";
import Specs from "../../components/specs/Specs";
import Case from "../../components/case/Case";
import Notification from "../../components/notification/Notification";
import Products from "../../components/products/Products";

export default function IndexPages() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />

        <Sponsors />
        <Specs />
        <Case />
        <Notification />
        <Products />
      </main>
      <Footer />

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-s-line scrollup__icon"></i>
      </a>
    </>
  );
}
