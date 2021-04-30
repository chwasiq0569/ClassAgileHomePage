import React, {useEffect, useRef} from 'react';
import i18next from 'i18next';
import MobileMenu from './MobileMenu';
import StickyMenu from './StickyMenu';
import UpperMenu from './UpperMenu';

const Header = ({scrollToSection}) => {
    return ( <header className="main-header header-style-two">
    <UpperMenu scrollToSection={scrollToSection} />
    <StickyMenu scrollToSection={scrollToSection} />
    <MobileMenu scrollToSection={scrollToSection} />
</header> );
}
 
export default Header;