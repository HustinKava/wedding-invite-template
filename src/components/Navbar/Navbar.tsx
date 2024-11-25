import { useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MobileMenu from '@components/MobileMenu/MobileMenu';
import './Navbar.scss';
import { TITLE, COUPLE, STORY, LOCATION, RSVP, GALLERY } from './Constants';

const Navbar: React.FC = () => {
  const elementToFocus = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (elementToFocus.current) elementToFocus.current.focus();
  }, []);

  return (
    <div ref={elementToFocus} className="nav-wrapper">
      <div className="nav">
        <div className="container">
          <div className="row">
            <div className="nav-links col-lg-4 d-lg-block d-none">
              <ul className="nav-desktop nav-desktop-left d-flex">
                <li>
                  <AnchorLink href="#location">{LOCATION}</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#couple">{COUPLE}</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#story">{STORY}</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#gallery">{GALLERY}</AnchorLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-10">
              <div className="nav-logo">
                <h2>
                  <AnchorLink href="#home">{TITLE}</AnchorLink>
                </h2>
              </div>
            </div>
            <div className="nav-links col-lg-4 d-lg-block d-none">
              <ul className="nav-desktop nav-desktop-right d-flex">
                <li>
                  <AnchorLink href="#rsvps">{RSVP}</AnchorLink>
                </li>
              </ul>
            </div>
            <div className="nav-links col-2">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
