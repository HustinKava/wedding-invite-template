// import { useContext, useEffect } from 'react';
// import { GlobalContext } from '@utils/GlobalContext';
// import { GlobalStateInterface } from '@interfaces/types';
// import { collection, setDoc, doc, getDocs } from 'firebase/firestore';
// import db from '@utils/FirebaseConfig';
import Validation from '@components/Validation/Validation';

const EmailValidation: React.FC = () => {
  // const { guests } = useContext(GlobalContext) as GlobalStateInterface;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, 'rsvps'));
  //       const rsvpDatabase = querySnapshot.docs
  //         .map((guest) => guest.data())
  //         .map((obj) => Object.fromEntries(Object.entries(obj).sort()));

  //       // Confirmed wedding guests
  //       console.log(
  //         'Groom confirmed wedding',
  //         rsvpDatabase.filter((wedding) => !!(wedding.rsvpWedding && wedding.side === 'Groom'))
  //       );

  //       console.log(
  //         'Bride confirmed wedding',
  //         rsvpDatabase.filter((wedding) => !!(wedding.rsvpWedding && wedding.side === 'Bride'))
  //       );

  //       // Confirmed reception guests
  //       console.log(
  //         'Groom confirmed reception',
  //         rsvpDatabase.filter((reception) => !!(reception.rsvpReception && reception.side === 'Groom'))
  //       );

  //       console.log(
  //         'Bride confirmed reception',
  //         rsvpDatabase.filter((reception) => !!(reception.rsvpReception && reception.side === 'Bride'))
  //       );

  //       // Declined guests
  //       console.log(
  //         'declined events',
  //         rsvpDatabase.filter((decline) => decline.rsvp && !decline.rsvpWedding && !decline.rsvpReception)
  //       );

  //       // Viewed but no rsvp
  //       console.log(
  //         'viewed website',
  //         rsvpDatabase.filter((view) => !view.rsvp && view.viewed)
  //       );

  //       // Have not view or rsvp'ed
  //       console.log(
  //         'Groom no rsvp',
  //         rsvpDatabase.filter((nothing) => !nothing.rsvp && nothing.side === 'Groom')
  //       );
  //       console.log(
  //         'Bride no rsvp wedding',
  //         rsvpDatabase.filter((nothing) => !nothing.rsvp && nothing.side === 'Bride' && nothing.bothEvents)
  //       );
  //       console.log(
  //         'Bride no rsvp reception',
  //         rsvpDatabase.filter((nothing) => !nothing.rsvp && nothing.side === 'Bride' && !nothing.bothEvents)
  //       );
  //     } catch (error) {
  //       console.error('Error fetching data from Firestore:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const addData = () => {
  //   const dbTest = collection(db, 'rsvps');

  //   guests.forEach((guest) => {
  //     console.log('guest', guest);
  //     setDoc(doc(dbTest, guest.email), {
  //       email: guest.email,
  //       bothEvents: guest.bothEvents,
  //       family: guest.family,
  //       guests: guest.guests,
  //       side: guest.side,
  //       rsvp: guest.rsvp,
  //       rsvpWedding: guest.rsvpWedding,
  //       rsvpReception: guest.rsvpReception,
  //       viewed: guest.viewed
  //       // eslint-disable-next-line no-console
  //     }).catch((err: Error) => console.log('err', err));
  //   });
  // };

  return (
    <div>
      {/* <button onClick={addData} type="button">
        add data
      </button> */}
      <Validation />
    </div>
  );
};

export default EmailValidation;
