import React from 'react';
const SideBarCart = () => {
    return (  <div className="xs-sidebar-group info-group">
    <div className="xs-overlay xs-bg-black"></div>
    <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
            <div className="widget-heading">
                <a href="#" className="close-side-widget">
                    X
                </a>
            </div>
            <div className="sidebar-textwidget">
                
                <div className="sidebar-info-contents">
                    <div className="content-inner">
                        <div className="logo">
                            <a href="index.html"><img width="170px" height="55px" src="images/logos/class-agile_full-logo.svg" alt="" /></a>
                        </div>
                        <div className="content-box">
                            <h2>About Us</h2>
                            <p className="text">The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                            <a href="#" className="theme-btn btn-style-two"><span className="txt">Consultation</span></a>
                        </div>
                        <div className="contact-info">
                            <h2>Contact Info</h2>
                            <ul className="list-style-two">
                                <li><span className="icon fa fa-location-arrow"></span>Chicago 12, Melborne City, USA</li>
                                <li><span className="icon fa fa-phone"></span>(111) 111-111-1111</li>
                                <li><span className="icon fa fa-envelope"></span>lebari@gmail.com</li>
                                <li><span className="icon fa fa-clock-o"></span>Week Days: 09.00 to 18.00 Sunday: Closed</li>
                            </ul>
                        </div>
                        {/* <ul className="social-box">
                            <li className="facebook"><a href="#" className="fa fa-facebook-f"></a></li>
                            <li className="twitter"><a href="#" className="fa fa-twitter"></a></li>
                            <li className="linkedin"><a href="#" className="fa fa-linkedin"></a></li>
                            <li className="instagram"><a href="#" className="fa fa-instagram"></a></li>
                            <li className="youtube"><a href="#" className="fa fa-youtube"></a></li>
                        </ul> */}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div> );
}
 
export default SideBarCart;