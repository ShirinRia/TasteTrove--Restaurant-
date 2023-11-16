import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";

import Popularmenu from "./Popularmenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TasteTrove | Home</title>

            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Popularmenu></Popularmenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;