import React, { useEffect } from 'react';
import VanillaTilt from "vanilla-tilt";
import { Link } from 'react-router-dom';

const InstructorColumn = ({feature}) => {
    useEffect(() => {
        VanillaTilt.init(document.querySelector(".tiltObject"), {
            max: 10,
            speed: 700,
        });
        //It also supports NodeList
        VanillaTilt.init(document.querySelectorAll(".tiltObject"));
    }, [])

    return (  <div className="instructor-column col-lg-4 col-md-12 col-sm-12">
    <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
        <h4>{feature.mainHead}</h4>
        <p>{feature.details}</p>
        <Link data-ga-tag="features" to="/demo" className="click-here" href={feature.link}>{feature.linkTitle}</Link>
        <div className="image tiltObject" data-tilt data-tilt-max="10" data-tilt-speed="700">
            <img src={feature.icon} alt="" />
        </div>
    </div>
    </div> );
}
 
export default InstructorColumn;