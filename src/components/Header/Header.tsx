import { HeaderInterface } from '@interfaces/types';
import './Header.scss';

const Header: React.FC<HeaderInterface> = ({ header }) => {
  return <h2 className="header">{header}</h2>;
};

export default Header;
