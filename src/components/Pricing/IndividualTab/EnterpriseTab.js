import React from 'react';
import { useTranslation } from 'react-i18next';

const EnterpriseTab = ({type}) => {
     const {t} = useTranslation();

    return ( <div className="price-block-two active col-lg-4 col-md-6 col-sm-12">
    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div className="icon-box">
            <span className="icon"><img src="images/icons/price-icon-4.png" alt="" /></span>
        </div>
        <h4>{type === "monthly" ? t('pricing.monthly.plan2.name') : t('pricing.yearly.plan2.name')}</h4>
        <div className="price">{type === "monthly" ? t('pricing.monthly.plan2.price') : t('pricing.yearly.plan2.price')}<span>{type === "monthly" ? t('pricing.monthly.plan2.duration') :  t('pricing.yearly.plan2.duration')}</span></div>
        <ul className="price-list">
            {
               type === "monthly" ? t('pricing.monthly.plan2.benefits', { returnObjects: true }).map(items => (
                    <>
                         <li>{items}</li>
                    </>
                )) : t('pricing.yearly.plan2.benefits', { returnObjects: true }).map(items => (
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
</div>);
}
 
export default EnterpriseTab;