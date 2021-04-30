import React, {useEffect, useState, Component} from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import DemosContainer from '../components/Demo/DemosContainer';
import FaqHero from './../components/FaqComponent/FaqHero/FaqHero';
import { demopageScripts } from './../util/util';
import DemoHero from './../components/Demo/DemoHero/DemoHero';

const Demos = ({scrollToSection}) => {
  useEffect(() => {
    window.scrollTo(0,0)
    demopageScripts();
  }, [])
    return (<div className="page-wrapper" style={{backgroundColor: "#F3FEF9"}}>
        <Header scrollToSection={scrollToSection} />
        <DemoHero />
        <DemosContainer />
        <Footer scrollToSection={scrollToSection} />
  </div> );
}
 
export default Demos;