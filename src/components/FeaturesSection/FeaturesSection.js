import React, { useEffect } from "react";
import IndividualFeature from './IndividualFeature/IndividualFeature';
import InstructorColumn from './InstructorColumn/InstructorColumn';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {    


  const {t} = useTranslation();
  return (
    <section id="features" className="instructor-section featuresSecClass" style={{backgroundColor: ''}}>
      <div class="pattern-layer featuresPattren" style={{ backgroundImage: "url('images/background/pattern-8.png')" }}></div>
       <div
        className="background-layer bgLayerFeature"
        style={{ backgroundImage: "url('images/background/1.png')" }}
      ></div>
      <div
        className="background-layer-one"
        style={{ backgroundImage: "url('images/background/pattern-1.png')" }}
      ></div> 
       <div
        className="background-layer-two"
        style={{ backgroundImage: "url('images/background/pattern-2.png')" }}
      ></div> 

       <div class="featurescircle-one paroller" data-paroller-factor="-0.20" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="horizontal"></div>

		  <div class="featurescircle-two paroller" data-paroller-factor="0.20" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="horizontal"></div>
      
      <div className="auto-container">
        <div className="row clearfix">
          <div className="blocks-column col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="row clearfix">
                {
                  t('features', { returnObjects: true }).map((feature, i) => (
                      <>
                      {
                        i == 2 ? <InstructorColumn feature={feature} /> : <IndividualFeature key={i} feature={feature} />
                      }
                      </>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
