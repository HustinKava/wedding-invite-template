import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';
import { GlobalStateInterface } from '@interfaces/types';
import Header from '@components/Header/Header';
import Calendar from '@components/Calendar/Calendar';
import Flower4 from '@images/flowers/flower-4.png';
import './RsvpExists.scss';
import { TITLE, THANKS, GIFTS, FLOWER } from './Constants';

const RsvpExists: React.FC = () => {
  const { guest } = useContext(GlobalContext) as GlobalStateInterface;
  const { rsvpWedding, rsvpReception } = guest;

  return (
    <div id="rsvps" className="exists-wrapper">
      <img className="exists-flower-1" src={Flower4} alt={FLOWER} />
      <Header header={TITLE} />
      <div className="exists">
        <div className="exists-heading">
          <p>{THANKS}</p>
        </div>
        {(rsvpWedding || rsvpReception) && <Calendar />}
        <p className="exists-content">{GIFTS}</p>
      </div>
    </div>
  );
};

export default RsvpExists;
