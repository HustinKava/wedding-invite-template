import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';
import { GlobalStateInterface } from '@interfaces/types';
import Navbar from '@components/Navbar/Navbar';
import Hero from '@components/Hero/Hero';
import Couple from '@components/Couple/Couple';
import Story from '@components/Story/Story';
import Location from '@components/Location/Location';
import Rsvp from '@components/Rsvp/Rsvp';
import RsvpExists from '@components/RsvpExists/RsvpExists';
import Gallery from '@components/Gallery/Gallery';

const Homepage: React.FC = () => {
  const {
    guest: { rsvp }
  } = useContext(GlobalContext) as GlobalStateInterface;

  return (
    <div>
      <Navbar />
      <Hero />
      <Location />
      <Couple />
      <Story />
      {!rsvp ? <Rsvp /> : <RsvpExists />}
      <Gallery />
    </div>
  );
};

export default Homepage;
