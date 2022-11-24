import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCategories from '../ProductCategories/ProductCategories';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MobiHub-Home</title>
            </Helmet>
            <TopBanner></TopBanner>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;