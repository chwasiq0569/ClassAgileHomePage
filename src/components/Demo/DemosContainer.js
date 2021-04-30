import React,{ useState } from 'react';
import Demo from './IndividualDemo/Demo';
import { useTranslation } from 'react-i18next';

const DemosContainer = () => {
    const {t} = useTranslation();

    return (
    <section className="page-title-section">
    <div className="icon-layer-two editedCircleLayer" style={{backgroundImage: "url('images/icons/icon-6.png')"}} ></div>
    <div className="icon-layer-three editedSquareLayer" style={{backgroundImage: "url('images/icons/icon-4.png')"}} ></div>
     <div className="auto-container demos" >
            <div className="row clearfix" >
                {
                  t('demo.demoItems', { returnObjects: true }).map((item) => (
                      <>
                      {
                        <Demo demoType={item.type} item={item} />
                      }
                      </>
                  ))
                }
            </div>
     </div>
    
         
</section>
);
}
 
export default DemosContainer;