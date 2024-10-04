import HeaderTitle from "../sheard/HeaderTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";
const Category = () => {
    return (
        <section className="container mx-auto mt-16">
            <HeaderTitle heading="ORDER ONLINE" subheading="---From 11:00am to 10:00pm---"></HeaderTitle>
            <div className="mt-10">
                <Swiper 
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-10"
                >
                    <SwiperSlide>
                        <div className="text-center">
                            <img src={slide1} alt="" />
                            <h2 className="text-7xl text-center text-white -mt-12">Salads</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <img src={slide2} alt="" />
                            <h2 className="text-7xl text-center text-white -mt-12">Soups</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <img src={slide3} alt="" />
                            <h2 className="text-7xl text-center text-white -mt-12">pizzas</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <img src={slide4} alt="" />
                            <h2 className="text-7xl text-center text-white -mt-12">desserts</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <img src={slide5} alt="" />
                            <h2 className="text-7xl text-center text-white -mt-12">Salads</h2>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Category;