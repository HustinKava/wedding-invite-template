import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Scrollbar.scss';

const Scrollbar: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const className = scroll < 80 ? 'invisible' : 'visible';

  return (
    <div className="scroll-wrapper col-lg-12">
      <div className={className}>
        <ul className="smoothscroll">
          <li>
            <AnchorLink href="#home">
              <i className="fa fa-arrow-up" />
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
