import React from "react";
import { useTranslation } from 'react-i18next';

const LegalContent = () => {
  const {t} = useTranslation();

  return (
    <>
      <section className="skill-section legalContent" >
      <div className="pattern-layer legalBgPattren" style={{backgroundImage: "url('images/background/pattern-8.png')"}}></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="skill-column col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title"></div>
                  <div className="legal_UpperSection">
                    <h1>{t('legal.mainHeading')}</h1>
                  </div>
                  <div className="legal_LowerSection" >
                  <h2>{t('legal.primaryHead')}</h2>
                  <div className="text" >
                    {t('legal.details')}
                  </div>
                </div>
                </div>
              </div>
            </div>
            {/* <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="circle-one"></div>
                <div className="circle-two"></div>
                <div
                  className="image title tiltObject"
                  data-tilt="true"
                  data-tilt-max="10"
                  data-tilt-speed="700"
                >
                  <img src="images/resource/aboutus.svg" alt="" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <div className="legalContent outer-container clearfix">
              <div className="legal_UpperSection">
                  <h1>Legal</h1>
              </div>
              <div className="legal_LowerSection">
                  <h2>Legal</h2>
                  <p>Your privacy is important to us. It is Otto Template Demo's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
                  <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                  <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                  <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                  <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                  <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
              </div>
        </div> */}
    </>
  );
};

export default LegalContent;
