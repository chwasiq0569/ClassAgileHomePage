import React from 'react';
import { useHistory } from 'react-router-dom';

const IndividualFeature = ({feature}) => {
  const history = useHistory();
    return (  <div key={feature.mainHead} className="service-block col-lg-4 col-md-6 col-sm-12" >
    <div
      data-ga-tag="feature"
      className="inner-box wow fadeInLeft"
      data-wow-delay="0ms"
      data-wow-duration="1500ms"
      onClick={() => history.push("/demo")} 
    >
      <div className="border-layer"></div>
      <div className="icon-box">
        <div className="featuresIconContainer">
          <img className="featuresIcon" src={feature.icon} />
        </div>
                  
      </div>
      <h4>
        <a data-ga-tag="features"
          data-savepage-href="course-detail.html"
          href="https://cradle.services/course-detail.html"
        >
          {feature.mainHead}
        </a>
      </h4>
      <div className="text">
          {feature.details}
      </div>
    </div>
  </div> );
}
 
export default IndividualFeature;