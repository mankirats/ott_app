// Import css files
import React from "react";
import Slider from "react-slick";

// Import css files
import "../slick/slick/slick.css";
import "../slick/slick/slick-theme.css";
import { SliderImage } from "./CustomStyle";

function HomeCarosuel(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <SliderImage
                    src="https://s3.amazonaws.com/images.seroundtable.com/google-rainbow-texture-1491566442.jpg"
                    alt=""
                    srcset=""
                />
            </div>
            <div>
                <SliderImage
                    src="https://api.time.com/wp-content/uploads/2015/04/google-sign.jpg"
                    alt=""
                    srcset=""
                />
            </div>
        </Slider>
    );
}

export default HomeCarosuel;
