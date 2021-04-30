import React, { useEffect } from 'react';
import FaqComponent from '../components/FaqComponent/FaqComponent';
import Header from './../components/Header/Header';
import FaqHero from './../components/FaqComponent/FaqHero/FaqHero';
import SideBarCart from './../components/SidebarCart/SideBarCart';
import Footer from '../components/Footer/Footer';
import { faqpageScripts } from './../util/util';

const Faq = ({scrollToSection}) => {

  useEffect(() => {
    window.scrollTo(0,0)
    faqpageScripts()
  }, [])


    return ( <div className="page-wrapper legalpageWrapper">
    {/* <div className="preloader"></div> */}
    <Header scrollToSection={scrollToSection} />
    <SideBarCart />
    <FaqHero head="Get Answers to Your Questions" />    
    <FaqComponent />
    <Footer scrollToSection={scrollToSection} />
  </div> );
}
 
export default Faq;