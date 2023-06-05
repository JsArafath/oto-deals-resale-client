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
import NewCollection from "../NewCollection/NewCollection";
import Progress from "../Progress/Progress";
import GoToApps from "./GoToApps/GoToApps";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedProducts></AdvertisedProducts>
      <Progress></Progress>
      <Steps></Steps>
      <Sales></Sales>
      <NewCollection></NewCollection>
      <GoToApps></GoToApps>
      <Map></Map>
      <Contact></Contact>
      <GoToTop></GoToTop>
    </div>
  );
};

export default Home;
