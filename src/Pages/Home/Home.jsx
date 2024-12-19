import React from 'react';
import Banner from './Banner';
import BannerCompo from './BannerCompo';
import Latest from '../../Components/Latest';

const Home = () => {
    return (
        <div>
            
            <BannerCompo></BannerCompo>
            <Latest></Latest>
        </div>
    );
};

export default Home;