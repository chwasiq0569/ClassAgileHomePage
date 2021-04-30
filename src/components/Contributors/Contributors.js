import React from 'react';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';


const Contributors = () => {
    const {t} = useTranslation();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
      };

    return ( <section className="clients-section">
    <div className="auto-container">
        <div className="sec-title centered">
            <h2>{t('carousel.mainHead')}</h2>
            <div className="text">{t('carousel.details')}</div>
        </div>
            <Slider {...settings}>{
                t('carousel.images', { returnObjects: true }).map((img, i) => (
                    <li key={i} className="carousel_Item">
                        <div className="item_Container">
                            <img src={img} alt=""  /> 
                        </div>
                    </li>
                ))
            }
            </Slider>
    </div>
</section> );
}
 
export default Contributors;