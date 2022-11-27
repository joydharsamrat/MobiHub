import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import ProductCategories from '../ProductCategories/ProductCategories';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MobiHub-Home</title>
            </Helmet>
            <TopBanner></TopBanner>
            <AdvertisedProducts></AdvertisedProducts>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;