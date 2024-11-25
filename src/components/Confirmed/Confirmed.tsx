import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';
import { GlobalStateInterface } from '@interfaces/types';
import Header from '@components/Header/Header';
import Calendar from '@components/Calendar/Calendar';
import Flower2 from '@images/flowers/flower-2.png';
import Flower4 from '@images/flowers/flower-4.png';
import './Confirmed.scss';
import { CONFIRMED, THANKS, EMAIL, SOON, FLOWER } from './Constants';

const Confirmed: React.FC = () => {
  const { rsvpLocalWedding, rsvpLocalReception } = useContext(GlobalContext) as GlobalStateInterface;

  return (
    <div className="confirmation-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="confirmation">
              <img className="confirmation-flower-1" src={Flower2} alt={FLOWER} />
              <img className="confirmation-flower-2" src={Flower4} alt={FLOWER} />
              <div className="col-12">
                <Header header={CONFIRMED} />
                <p>{THANKS}</p>
                {(rsvpLocalWedding || rsvpLocalReception) && (
                  <>
                    <p>{EMAIL}</p>
                    <p className="confirmation-padding">{SOON}</p>
                    <Calendar />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
