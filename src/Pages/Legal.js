import React, {useEffect} from 'react';
import Footer from '../components/Footer/Footer';
import LegalContent from '../components/LegalContent/LegalContent';
import Header from './../components/Header/Header';
import { mobileMenuJS } from '../util/util';
const Legal = ({scrollToSection}) => {

    useEffect(() => {
        mobileMenuJS();
    }, [])

    return ( <div className="legalpageWrapper">
        <Header scrollToSection={scrollToSection} />
        <LegalContent />
        <Footer scrollToSection={scrollToSection} />
    </div>);
}
 
export default Legal;