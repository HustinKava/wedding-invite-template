import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '@utils/GlobalContext';
import { Data, GlobalStateInterface } from '@interfaces/types';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import db from '@utils/FirebaseConfig';
import Flower6 from '@images/flowers/flower-6.png';
import Flower8 from '@images/flowers/flower-8.png';
import './Validation.scss';
import { TITLE, SUBMIT, ENTER_EMAIL, INCORRECT_EMAIL, FLOWER, WELCOME } from './Constants';

const Validation: React.FC = () => {
  const { updateState } = useContext(GlobalContext) as GlobalStateInterface;
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const history = useHistory();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === '') {
      setError(ENTER_EMAIL);
    } else {
      const allGuestsRef = doc(collection(db, 'rsvps'), email.toLocaleLowerCase());

      getDoc(allGuestsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const guestData = snapshot.data() as Data | undefined;
            const guestRef = doc(collection(db, 'rsvps'), guestData?.email);
            // Set the viewed property to true in the db
            if (!guestData?.viewed) {
              updateDoc(guestRef, {
                viewed: true
              });
            }
            setError('');
            updateState({ guest: guestData, validEmail: true });
            history.push('/home');
          } else {
            setError(INCORRECT_EMAIL);
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  };

  return (
    <div className="validation-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="validation">
              <img className="validation-flower-1" src={Flower8} alt={FLOWER} />
              <img className="validation-flower-2" src={Flower6} alt={FLOWER} />
              <div className="col-12">
                <h2 className="validation-title">{TITLE}</h2>
                <p className="validation-welcome">{WELCOME}</p>
              </div>
              <form onSubmit={submitHandler}>
                <div className="validation-form">
                  <div className="validation-row row">
                    <div className="col-12 col-sm-9">
                      <input
                        type="text"
                        placeholder="Your Email*"
                        onChange={changeHandler}
                        value={email}
                        id="email"
                        name="email"
                        autoComplete="off"
                        className="validation-form-email"
                      />
                    </div>
                    <div className="col-12 col-sm-3 text-center">
                      <button id="submit" type="submit" className="validation-form-btn">
                        {SUBMIT}
                      </button>
                    </div>
                  </div>
                  {error && (
                    <div className="error row">
                      <p className="error-msg">{error}</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validation;
