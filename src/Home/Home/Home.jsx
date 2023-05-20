import React from "react";
import AllToys from "../../component/Pages/AllToys";
import Banner from "../../component/Pages/Banner";
import Gallery from "../../component/Pages/Gallery";
import Category from "./Category";
import Favourite from "../Extrasection/Favourite";
import Discount from "../Extrasection/Discount";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Favourite></Favourite>
      <Discount></Discount>
    </div>
  );
};

export default Home;
