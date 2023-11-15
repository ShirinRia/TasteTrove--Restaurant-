import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {

                setreviews(data)
            })
    }, [])
    return (
        <section>
            <Sectiontitle heading={"Testimonials"}
                subheading={"---What Our Clients Say---"}></Sectiontitle>
            <div className="mx-32">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="mx-16 my-12 space-y-7 flex flex-col items-center justify-center">
                                <Rating 
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-center">{review.details}</p>
                                <h3 className="text-xl text-center">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;