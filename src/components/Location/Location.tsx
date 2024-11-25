import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';
import { GlobalStateInterface } from '@interfaces/types';
import Header from '@components/Header/Header';
import Flower2 from '@images/flowers/flower-2.png';
import Flower5 from '@images/flowers/flower-5.png';
import './Location.scss';
import {
  TITLE,
  WEDDING,
  WEDDING_DATE,
  WEDDING_ADDRESS1,
  WEDDING_ADDRESS2,
  WEDDING_ADDRESS3,
  RECEPTION,
  RECEPTION_DATE,
  RECEPTION_ADDRESS1,
  RECEPTION_ADDRESS2,
  RECEPTION_ADDRESS3,
  FLOWER,
  RECEPTION_TIME,
  WEDDING_TIME,
  DIRECTIONS,
  RECEPTION_DIRECTIONS,
  WEDDING_DIRECTIONS
} from './Constants';

const Location: React.FC = () => {
  const { guest } = useContext(GlobalContext) as GlobalStateInterface;
  const { bothEvents } = guest;

  return (
    <div id="location" className="location-wrapper">
      <Header header={TITLE} />

      <div className="location">
        {bothEvents && (
          <div className="location-content">
            <div className="location-content-header">
              <p className="location-content-header-title">{WEDDING}</p>
              <p className="location-content-header-date">{WEDDING_DATE}</p>
              <p className="location-content-header-title">{WEDDING_TIME}</p>
              <img className="location-content-header-flower-1" src={Flower5} alt={FLOWER} />
            </div>

            <div className="location-content-address">
              <p className="location-content-address-venue">{WEDDING_ADDRESS1}</p>
              <p className="location-content-address-value">{WEDDING_ADDRESS2}</p>
              <p className="location-content-address-value">{WEDDING_ADDRESS3}</p>
              <a href={WEDDING_DIRECTIONS} target="_blank" rel="noopener noreferrer">
                {DIRECTIONS}
              </a>
            </div>
          </div>
        )}
        <div className="location-content">
          <div className="location-content-header">
            {!bothEvents && <img className="location-content-header-flower-2" src={Flower2} alt={FLOWER} />}
            <p className="location-content-header-title">{RECEPTION}</p>
            <p className="location-content-header-date">{RECEPTION_DATE}</p>
            <p className="location-content-header-title">{RECEPTION_TIME}</p>
          </div>

          <div className="location-content-address">
            <p className="location-content-address-venue">{RECEPTION_ADDRESS1}</p>
            <p className="location-content-address-value">{RECEPTION_ADDRESS2}</p>
            <p className="location-content-address-value">{RECEPTION_ADDRESS3}</p>
            <a href={RECEPTION_DIRECTIONS} target="_blank" rel="noopener noreferrer">
              {DIRECTIONS}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
