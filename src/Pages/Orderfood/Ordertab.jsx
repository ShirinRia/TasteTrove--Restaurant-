import Foodcard from "../../components/Foodcard/Foodcard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Ordertab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {items.map(item => <Foodcard key={item._id} item={item}></Foodcard>)}
                 </div>
                 </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Ordertab;