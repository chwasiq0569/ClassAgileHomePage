import React from 'react';
import BasicTab from '../IndividualTab/BasicTab';
import EnterpriseTab from './../IndividualTab/EnterpriseTab';
import StandardTab from './../IndividualTab/StandardTab';

const TabsGroupYearly = () => {
    return ( <div className="tab" id="prod-yearly">
    <div className="content">
        <div className="row clearfix">
            <BasicTab type="yearly" />
            <EnterpriseTab type="yearly" />
            <StandardTab type="yearly" />            
        </div>
    </div>
</div> );
}
 
export default TabsGroupYearly;