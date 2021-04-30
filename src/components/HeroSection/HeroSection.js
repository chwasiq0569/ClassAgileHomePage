import React, {useEffect} from 'react';
import VanillaTilt from "vanilla-tilt";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const {t} = useTranslation();

    useEffect(()=>{
        VanillaTilt.init(document.querySelector(".tiltObject"), {
            max: 10,
            speed: 700,
        });
        console.log(t('hero.mainHead'))
        //It also supports NodeList
        VanillaTilt.init(document.querySelectorAll(".tiltObject"));
    }, [])

    return ( <section className="banner-section-two heroSectionClass">
    <div className="auto-container">
        <div className="pattern-layer-two" style={{backgroundImage: "url('images/background/pattern-15.png')"}}></div>
        <div className="pattern-layer-three" style={{backgroundImage: "url('images/main-slider/icon-2.png')"}} ></div>
        <div className="row clearfix">
        
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                 <div className="pattern-layer-one" style={{backgroundImage: "url(images/main-slider/pattern-1.png)"}} ></div>
                <div className="icon-layer-one" style={{backgroundImage: "url('images/main-slider/icon-2.png')"}} ></div>
                <div className="icon-layer-two"  style={{backgroundImage: "url('images/main-slider/pattern-2.png')"}}></div>
                <div className="icon-layer-three" style={{backgroundImage: "url('images/main-slider/icon-1.png')"}}></div>
                <div className="icon-layer-four"  style={{backgroundImage: "url('images/icons/icon-3.png')"}}></div>
                <div className="icon-layer-five" style={{backgroundImage: "url('images/icons/icon-4.png')"}}></div> 
                 <div className="inner-column">
                    {/* <div className="title">Learn latest skills</div> */}
                    <h1>{t('hero.mainHead')}</h1>
                    <div className="heroDetails">{t('hero.details')}</div>
                     <div className="btns-box">
                        <a data-ga-tag="join-now" href="/" className="theme-btn btn-style-one"><span className="txt">{t('hero.btnTxt')}</span></a>
                    </div> 
                </div> 
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                    <div className="image title tiltObject" data-tilt data-tilt-max="10" data-tilt-speed="700">
                     <img src="images/main-slider/header.svg" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section> );
}
 
export default HeroSection;