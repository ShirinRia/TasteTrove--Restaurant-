
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Sectiontitle from '../../components/Sectiontitle/Sectiontitle';
const Category = () => {
    return (
        <section className='my-16 '>
            <Sectiontitle heading={"ORDER ONLINE"} 
            subheading={"---From 11:00am to 10:00pm---"}></Sectiontitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} alt="" />
                <h3 className='text-4xl uppercase text-center -mt-12'>SALaD</h3></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h3 className='text-4xl uppercase text-center -mt-12'>PIZZA</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h3 className='text-4xl uppercase text-center -mt-12'>SOUP</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h3 className='text-4xl uppercase text-center -mt-12'>CAKE</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /><h3 className='text-4xl uppercase text-center -mt-12'>FUCHKA</h3></SwiperSlide>
                
            </Swiper>
        </section>
    );
};

export default Category;