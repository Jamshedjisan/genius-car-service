import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import Banner from "./Banner/Banner";
import Experts from "./Experts/Experts";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Experts></Experts>
      <Services></Services>
    </div>
  );
};

export default Home;
