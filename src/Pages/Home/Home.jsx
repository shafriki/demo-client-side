import React from 'react';
import Banner from './Banner';
import BannerCompo from './BannerCompo';
import Latest from '../../Components/Latest';
import FindUs from '../../Components/FindUs';

const Home = () => {
    return (
        <div>
            
            <BannerCompo></BannerCompo>
            <Latest></Latest>
            <FindUs></FindUs>
        </div>
    );
};

export default Home;