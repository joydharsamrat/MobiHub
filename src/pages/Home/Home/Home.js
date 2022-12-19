import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import ProductCategories from '../ProductCategories/ProductCategories';
import Reviews from '../Reviews/Reviews';
import SellSteps from '../SellSteps/SellSteps';
import TopBanner from '../TopBanner/TopBanner';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MobiHub-Home</title>
            </Helmet>
            <TopBanner></TopBanner>
            <AdvertisedProducts></AdvertisedProducts>
            <ProductCategories></ProductCategories>
            <SellSteps></SellSteps>
            <WhyUs></WhyUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;