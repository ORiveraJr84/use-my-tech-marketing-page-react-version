import React from "react";
import { useOutletContext } from "react-router-dom";
import HomeForwardCompanies from "../components/HomeForwardCompanies";
import HomeHero from "../components/HomeHero";
import MainBody from "../components/MainBody";
import PreFooter from "../components/PreFooter";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const dismissed = useOutletContext();

  return (
    <div>
      <HomeHero dismissed={dismissed} />
      <HomeForwardCompanies />
      <hr />
      <MainBody />
      <Testimonials />
      <PreFooter />
    </div>
  );
};

export default Home;
