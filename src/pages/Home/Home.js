import React from 'react';
import BusinessReview from './BusinessReview';
import Services from '../../components/Services/Services';
import Banner from './Banner';
import Category from './Category';
import MiddleSec from './MiddleSec';
import Clients from './Clients';
import CustomerReview from './CustomerReview';

const Home = () => {
    return (
        <div>
            <Category></Category>
            <Banner></Banner>
            <Services></Services>
            <MiddleSec></MiddleSec>
            <CustomerReview></CustomerReview>
            <BusinessReview></BusinessReview>
            <Clients></Clients>
        </div>
    );
};

export default Home;