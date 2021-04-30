import React, {useEffect} from 'react';
import VanillaTilt from "vanilla-tilt";
import { useTranslation } from 'react-i18next';

    
const About = () => {

    const {t} = useTranslation();

    useEffect(() => {
        VanillaTilt.init(document.querySelector(".tiltObject"), {
            max: 10,
            speed: 700,
        });
        //It also supports NodeList
        VanillaTilt.init(document.querySelectorAll(".tiltObject"));
    }, [])

    return ( <section className="skill-section aboutSecClass">
    <div className="pattern-layer" style={{backgroundImage: "url('images/background/pattern-8.png')"}}></div>
    <div className="auto-container">
        <div className="row clearfix">
            
            <div className="skill-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column">
                     <div className="sec-title">
                        <div className="title"></div>
                        <h2>{t('about.mainHead')}</h2>
                        <div className="text">{t('about.details')}</div>
                    </div>
                    
                    <div className="skills">

                    <div className="btns-box">
                        <a data-ga-tag="aboutUs" href="about.html" className="theme-btn btn-style-one about_Btn"><span className="txt">{t('about.btnTxt')}</span></a>
                    </div> 

                    </div>
                    
                </div>
            </div>
            
            <div className="image-column col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                    <div className="image title tiltObject" data-tilt data-tilt-max="10" data-tilt-speed="700">
                        <img src={t('about.image')} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
        </div>
</section> );
}
 
export default About;