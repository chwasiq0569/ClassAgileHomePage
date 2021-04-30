import React, {useEffect} from 'react';
import IndividualTab from './IndividualTab/BasicTab';
import TabsGroupMonthly from './TabsGroup/TabsGroupMonthly';
import TabsGroupYearly from './TabsGroup/TabsGroupYearly';
import $ from "jquery";
import { pricingScript } from '../../util/util';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const {t} = useTranslation();
    useEffect(() => {
        pricingScript();
    }, [])
    return ( <section id="pricing" className="pricing-section-two pricingSecClass">
    <div className="auto-container">
        <div className="pattern-layer" style={{backgroundImage: "url('images/background/pattern-18.png')"}} ></div>
        <div className="pattern-layer-two"  style={{backgroundImage: "url('images/background/pattern-19.png')"}}  ></div>
        <div className="pattern-layer-three"  style={{backgroundImage: "url('images/icons/icon-4.png')"}}  ></div>
        <div className="pattern-layer-four"  style={{backgroundImage: "url('images/icons/icon-4.png')"}} ></div>
        <div className="sec-title centered">
            <h2>{t('pricing.sectionHead')}</h2>
            <div className="text">{t('pricing.secionDetail')}</div>
        </div>
        
        <div className="pricing-tabs tabs-box">
            
            <div className="buttons-outer">
                <ul className="tab-buttons clearfix">
                    <li data-ga-tag="monthly" data-tab="#prod-monthly" className="tab-btn active-btn">{t('pricing.planMonthly')}</li>
                    <li data-ga-tag="yearly" data-tab="#prod-yearly" className="tab-btn">{t('pricing.planYearly')}</li>
                </ul>
            </div>
            
            <div className="tabs-content">
               <TabsGroupMonthly />
               <TabsGroupYearly />
               {/* <TabsGroup /> */}
            </div>
        </div>
    </div>
</section> );
}
 
export default Pricing;
