import React from 'react';
import BasicTab from '../IndividualTab/BasicTab';
import EnterpriseTab from './../IndividualTab/EnterpriseTab';
import StandardTab from './../IndividualTab/StandardTab';
import { useTranslation } from 'react-i18next';

const TabsGroupMonthly = () => {
    const {t} = useTranslation();

    t('pricing.sectionHead')
    return (  <div className="tab active-tab" id="prod-monthly">
    <div className="content">
        <div className="row clearfix">
            <BasicTab type="monthly" />
            <EnterpriseTab type="monthly" />
            <StandardTab type="monthly" />
        </div>
    </div>
</div> );
}
 
export default TabsGroupMonthly;