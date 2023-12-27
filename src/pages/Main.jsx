import React from "react";
import Header from "../components/Header";
import MainSection1 from "../item/MainSection1";
import MainSection2 from "../item/MainSection2";
import MainSection3 from "../item/MainSection3";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <Footer />
    </div>
  );
}
