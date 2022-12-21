import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Contact from '../Contact/Contact';
import ProductCategories from '../ProductCategories/ProductCategories';
import Reviews from '../Reviews/Reviews';
import SellSteps from '../SellSteps/SellSteps';
import TopBanner from '../TopBanner/TopBanner';
import TrustedPartners from '../TrustedPartners/TrustedPartners';
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
            <TrustedPartners></TrustedPartners>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;