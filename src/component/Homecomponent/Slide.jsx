// "use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../assets/01.jpg"
import slide2 from "../../assets/02.jpg"
import slide3 from "../../assets/03.png"
import slide4 from "../../assets/04.jpg"

const Slide = () => {
    return (
        <section className="container mx-auto">
            <Carousel className="text-center gap-x">
                <div>
                    <img src={slide1} />
                     </div>
                <div>
                    <img src={slide2} />

                </div>
                <div>
                    <img src={slide3} />

                </div>
                <div>
                    <img src={slide4} />

                </div>

            </Carousel>
        </section>
    )
};
export default Slide;