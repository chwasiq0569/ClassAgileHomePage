import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { renderNavLinks } from './../Header/renderNavLinks';

const Footer = ({scrollToSection}) => {
    const history = useHistory();
    const {t} = useTranslation();

    function changeRoute(route){
        window.scrollTo(0, 0);
        history.push(route)
    }

    return ( <footer className="main-footer">
    <div className="circle-layer"></div>
    <div className="pattern-layer-one" style={{backgroundImage: "url(images/background/pattern-12.png)"}} ></div>
    <div className="pattern-layer-two"  style={{backgroundImage: "url(images/background/pattern-13.png)"}} ></div>
    <div className="pattern-layer-three"  style={{backgroundImage: "url(images/background/pattern-14.png)"}} ></div>
    <div className="pattern-layer-four"  style={{backgroundImage: "url(images/background/pattern-13.png)"}} ></div>
    <div className="auto-container">

        <div className="widgets-section">
            <div className="row clearfix">
                <div className="footer-column col-lg-5 col-md-12 col-sm-12">
                    <div className="footer-widget logo-widget">
                        <div data-ga-tag="classAgile" className="logo" >
                            <img width="150px" height="70px" onClick={() => scrollToSection("headerSectionClass")} src="images/logos/class-agile_full-logo.svg" alt="" />
                        </div>
                        <ul className="info-list">
                            <li data-ga-tag="phone">{t('footer.phone')}: {t('footer.phoneNumber')}</li>
                            <li data-ga-tag="email">{t('footer.emailLabel')}: {t('footer.email')}}</li>
                        </ul>

                        <ul className="social-box">
                            <li data-ga-tag="twitter" className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter"></a></li>
                            <li data-ga-tag="pinterest" className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p"></a></li>
                            <li data-ga-tag="facebook" className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f"></a></li>
                            <li data-ga-tag="dribbble" className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble"></a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-column col-lg-7 col-md-12 col-sm-12">
                    <div className="row clearfix">

                        <div className="column col-lg-10 col-md-10 col-sm-12">
                            <h5>About</h5>
                            <ul className="list footerNavList" >
                            {
                                renderNavLinks(t, changeRoute, scrollToSection)
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lower-box">
            <div className="row clearfix">
                <div className="col-lg-6 col-lg-6 col-sm-12">
                   
                </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <div className="row clearfix">
                
                <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
                    <div className="copyright">Copyright 2020, All Right Reserved</div>
                </div>
                
                <div className="nav-column col-lg-6 col-md-12 col-sm-12">
                    <ul>
                        
                    </ul>
                </div>
                
            </div>
        </div>
        
    </div>
</footer> );
}
 
export default Footer;