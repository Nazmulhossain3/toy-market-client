import React, { useEffect } from "react";
import AllToys from "../../component/Pages/AllToys";
import Banner from "../../component/Pages/Banner";
import Gallery from "../../component/Pages/Gallery";
import Category from "./Category";
import Favourite from "../Extrasection/Favourite";
import Discount from "../Extrasection/Discount";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../Hook/useTitle";

const Home = () => {
  useTitle('Home')

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });


  return (
    <div  data-aos="fade-up">
    

      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Favourite></Favourite>
      <Discount></Discount>
    </div>
  );
};

export default Home;
