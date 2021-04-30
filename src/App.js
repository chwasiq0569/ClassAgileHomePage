import React, { useEffect, useState }  from 'react';
import './App.css';
import Home from './Pages/Home';
import Faq from './Pages/Faq';
import Demos from './Pages/Demos';
import {
  Switch,
  Route
} from "react-router-dom";
import { scroller } from "react-scroll";
import { useHistory } from "react-router-dom";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import englishData from "./content/english.json";
import portugueseData from "./content/portuguese.json";
import spanishData from "./content/spanish.json";
import Legal from './Pages/Legal';
import Modal from './components/Modal/Modal';
import $ from "jquery";
import { getCookies } from './util/util';

// alert(window.navigator.userLanguage || window.navigator.language) check language
i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  lng: getCookies().i18next || window.navigator.userLanguage || window.navigator.language,
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: englishData
    },
    pt: {
      translation: portugueseData
    },
    es: {
      translation: spanishData
    }
  },
  detection: {
    order: ['navigator', 'localStorage', 'cookie', 'sessionStorage','querystring', 'htmlTag'],
    caches: ['cookie', 'localStorage']
  },
});


function App() {   
  const [modalOpen, setModalOpen] = useState(true);
  useEffect(() => {
    console.log(getCookies().savedCookie)
    if(getCookies().savedCookie === 'true'){
      setModalOpen(false)
    }
    else{
      setModalOpen(true)
    }
  }, [])

  const history = useHistory();

  const scrollToSection = (sectionClass) => {
      console.log(sectionClass)
      history.push("/");
      setTimeout(() => {
        scroller.scrollTo( sectionClass , {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 200)
  }


  return (
    <React.Fragment>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <Switch>
        <Route exact path="/" render={() => <Home scrollToSection={scrollToSection} />} />
        <Route exact path="/home" render={() => <Home scrollToSection={scrollToSection} />} />
        <Route exact path="/faq" render={() => <Faq scrollToSection={scrollToSection} />} />
        <Route exact path="/demo" render={() => <Demos scrollToSection={scrollToSection} /> } />
        <Route exact path="/legal" render={() => <Legal scrollToSection={scrollToSection} /> } />
      </Switch>
    </React.Fragment>
  );
}

export default App;
