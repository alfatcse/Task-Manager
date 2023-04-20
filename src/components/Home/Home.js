import React from 'react';
import HomeLeftBar from './HomeLeftBar/HomeLeftBar';
import SideBar from './SideBar/SideBar';

const Home = () => {
    return (
        <div className="container relative">
            <SideBar></SideBar>
            <HomeLeftBar></HomeLeftBar>
        </div>
    );
};

export default Home;