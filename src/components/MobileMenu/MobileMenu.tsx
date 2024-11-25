import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './MobileMenu.scss';
import { TITLE, COUPLE, STORY, LOCATION, RSVP, GALLERY } from './Constants';

const MobileMenu: React.FC = () => {
  const [menuShowing, setMenuShowing] = useState<boolean>(false);

  const openNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type === 'click') {
      setMenuShowing(!menuShowing);
      document.body.style.overflow = 'hidden';
    }
  };

  const openNavKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) {
      setMenuShowing(!menuShowing);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMobileMenu = () => {
    setMenuShowing(!menuShowing);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="nav-mobile-wrapper">
      <div
        className="nav-mobile-hamburger"
        role="button"
        tabIndex={0}
        onClick={(e) => openNavClick(e)}
        onKeyDown={(e) => openNavKey(e)}
      >
        <i className="fa fa-bars" aria-hidden="true" />
      </div>

      <div className={`nav-mobile ${menuShowing && 'nav-mobile-show'}`}>
        <div className="nav-mobile-logo">
          <i className="fa fa-times" aria-hidden="true" role="button" onClick={closeMobileMenu} />
          <h2>
            <AnchorLink href="#home" onClick={closeMobileMenu}>
              {TITLE}
            </AnchorLink>
          </h2>
        </div>
        <ul className="nav-mobile-links">
          <li>
            <AnchorLink href="#location" onClick={closeMobileMenu}>
              {LOCATION}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#couple" onClick={closeMobileMenu}>
              {COUPLE}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#story" onClick={closeMobileMenu}>
              {STORY}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#rsvps" onClick={closeMobileMenu}>
              {RSVP}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#gallery" onClick={closeMobileMenu}>
              {GALLERY}
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
