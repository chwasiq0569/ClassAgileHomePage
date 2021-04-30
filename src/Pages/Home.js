import React, { useEffect } from 'react';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import Pricing from '../components/Pricing/Pricing';
import About from '../components/About/About';
import Contributors from '../components/Contributors/Contributors';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { homepageScripts } from './../util/util';

const Home = ({scrollToSection}) => {

  useEffect(() => {
    window.scrollTo(0,0)
    homepageScripts()
  }, [])

    return ( <div className="page-wrapper">
    <Header scrollToSection={scrollToSection}  />
    <HeroSection />
    <FeaturesSection />
    <Pricing />
    <About />
    <Contributors />
    <Contact />
    <Footer scrollToSection={scrollToSection} /> 
  </div> );
}
 
export default Home;