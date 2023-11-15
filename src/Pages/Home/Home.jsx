import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";

import Popularmenu from "./Popularmenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Popularmenu></Popularmenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;