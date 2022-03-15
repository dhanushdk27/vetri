import React from 'react';
import Slide from './HomeCarousel/Carousel';
import HomeNav from './HomeNav/HomeNav';
import Navdwon from './HomeNav/Navdwon';

function Home(props) {
    return (
        <div>
            <HomeNav/>
            <Navdwon/>
            {/* <Slide/> */}
            
        </div>
    );
}

export default Home;