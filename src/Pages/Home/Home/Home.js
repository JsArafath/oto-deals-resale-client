import React from "react";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
// import Products from "../../Products/Products";
import Map from './../Map/Map';
import Contact from './../Contact/Contact';
import Steps from "../Steps/Steps";
import Sales from './../Sales/Sales';
import GoToTop from './GoToTop/goToTop';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedProducts></AdvertisedProducts>
      <Steps></Steps>
      <Sales></Sales>
      <Map></Map>
      <Contact></Contact>
      <GoToTop></GoToTop>
    </div>
  );
};

export default Home;
