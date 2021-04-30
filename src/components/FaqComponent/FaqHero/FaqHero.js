import React from 'react';
import { useTranslation } from 'react-i18next';
const FaqHero = () => {
    const {t} = useTranslation();

    return ( <section className="page-title-section">
    <div className="icon-layer-one" style={{backgroundImage: "url('images/icons/icon-5.png')"}} ></div>
    <div className="icon-layer-two" style={{backgroundImage: "url('images/icons/icon-6.png')"}} ></div>
    <div className="icon-layer-three" style={{backgroundImage: "url('images/icons/icon-4.png')"}} ></div>
    <div className="icon-layer-four" style={{backgroundImage: "url('images/icons/icon-7.png')"}} ></div>
    <div className="icon-layer-five" style={{backgroundImage: "url('images/icons/icon-7.png')"}}></div>
    <div className="icon-layer-six" style={{backgroundImage: "url('images/icons/icon-8.png')"}} ></div>
    <div className="auto-container">
        <ul className="page-breadcrumb">
            {/* <li><a href="index.html"></a></li> */}
            <li></li>
        </ul>
        <div className="content-box">
            <h2>{t('faq.mainHead')}</h2>
            <div className="text">{t('faq.details')}</div>
        </div>
    </div>
</section> );
}
 
export default FaqHero;