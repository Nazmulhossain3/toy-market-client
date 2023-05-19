import React from "react";
import AllToys from "../../component/Pages/AllToys";
import Banner from "../../component/Pages/Banner";
import Gallery from "../../component/Pages/Gallery";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
    </div>
  );
};

export default Home;
