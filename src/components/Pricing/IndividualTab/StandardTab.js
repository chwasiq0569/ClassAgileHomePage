import React from 'react';
import { useTranslation } from 'react-i18next';

const StandardTab = ({type}) => {
    const {t} = useTranslation();
    return ( <div className="price-block-two col-lg-4 col-md-6 col-sm-12">
    <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <h4>{type === "monthly" ? t('pricing.monthly.plan3.name') : t('pricing.yearly.plan3.name')}</h4>
        <div className="price">{type === "monthly" ? t('pricing.monthly.plan3.price') : t('pricing.yearly.plan3.price')}<span>{type === "monthly" ? t('pricing.monthly.plan3.duration') : t('pricing.yearly.plan3.duration')}</span></div>
        <ul className="price-list">
            {
               type === "monthly" ? t('pricing.monthly.plan3.benefits', { returnObjects: true }).map(items => (
                    <>
                         <li>{items}</li>
                    </>
                )) : t('pricing.yearly.plan3.benefits', { returnObjects: true }).map(items => (
                    <>
                         <li>{items}</li>
                    </>
                ))
            }
           
        </ul>
        <div className="btn-box">
            <a data-ga-tag="getStarted" href="#" className="theme-btn started-btn">{t('pricing.planBtnText')}</a>
        </div>
    </div>
</div> );
}
 
export default StandardTab;