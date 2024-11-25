import { useState, useContext, useRef, useEffect } from 'react';
import { GlobalContext } from '@utils/GlobalContext';
import { GlobalStateInterface, FormValues } from '@interfaces/types';
import { useHistory } from 'react-router-dom';
import { collection, doc, updateDoc } from 'firebase/firestore';
import db from '@utils/FirebaseConfig';
import emailjs from '@emailjs/browser';
import Header from '@components/Header/Header';
import Flower4 from '@images/flowers/flower-4.png';
import Flower8 from '@images/flowers/flower-8.png';
import './Rsvp.scss';
import {
  TITLE,
  SUB_TITLE,
  GIFTS,
  GUESTS,
  REQUESTS,
  SUBMIT,
  FLOWER,
  WEDDING,
  RECEPTION,
  WEDDING_CONFIRM,
  RECEPTION_CONFIRM,
  WEDDING_DECLINE,
  RECEPTION_DECLINE,
  THEIR_MSG,
  YOUR_MSG,
  HIDE_NOTE_TEXT,
  HIDE_NOTE_VALUES,
  RECEPTION_ERRORS,
  WEDDING_ERRORS,
  AND,
  RECEPTION_GUESTS,
  WEDDING_GUESTS
} from './Constants';

const initialFormValues: FormValues = {
  formWeddingGuests: '',
  formWeddingRsvp: WEDDING,
  formReceptionGuests: '',
  formReceptionRsvp: RECEPTION,
  formNotes: ''
};

const initialErrors: Partial<FormValues> = {
  formWeddingGuests: '',
  formReceptionGuests: ''
};

const Rsvp: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { guest, updateState } = useContext(GlobalContext) as GlobalStateInterface;
  const { email, bothEvents, family, guests } = guest;
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const { formWeddingGuests, formWeddingRsvp, formReceptionGuests, formReceptionRsvp, formNotes } = values;
  const [errors, setErrors] = useState<Partial<FormValues>>(initialErrors);
  const [formNoteText, setFormNoteText] = useState<string>('');
  const [formNoteValues, setFormNoteValues] = useState<string>('');
  const [formInformation, setFormInformation] = useState<string>('');
  const [attendingWedding, setAttendingWedding] = useState<boolean>(false);
  const [attendingReception, setAttendingReception] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    if (formWeddingGuests !== '0' && formWeddingGuests !== '') {
      if (formReceptionGuests !== '0' && formReceptionGuests !== '') {
        setFormInformation(`${formWeddingGuests} ${WEDDING_GUESTS} ${AND} ${formReceptionGuests} ${RECEPTION_GUESTS}`);
      } else {
        setFormInformation(`${formWeddingGuests} ${WEDDING_GUESTS}`);
      }
    } else if (formReceptionGuests !== '0' && formReceptionGuests !== '') {
      setFormInformation(`${formReceptionGuests} ${RECEPTION_GUESTS}`);
    }
  }, [formReceptionGuests, formWeddingGuests]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'formWeddingGuests') {
      switch (value) {
        case '':
          setValues({ ...values, [name]: value, formWeddingRsvp: WEDDING });
          return setAttendingWedding(false);
        case '0':
          setValues({
            ...values,
            [name]: value,
            formWeddingRsvp: WEDDING_DECLINE
          });
          return setAttendingWedding(false);
        default:
          setValues({ ...values, [name]: value, formWeddingRsvp: WEDDING_CONFIRM });
          return setAttendingWedding(true);
      }
    }

    if (name === 'formReceptionGuests') {
      switch (value) {
        case '':
          setValues({ ...values, [name]: value, formReceptionRsvp: RECEPTION });
          return setAttendingReception(false);
        case '0':
          setValues({
            ...values,
            [name]: value,
            formReceptionRsvp: RECEPTION_DECLINE
          });
          return setAttendingReception(false);
        default:
          setValues({ ...values, [name]: value, formReceptionRsvp: RECEPTION_CONFIRM });
          return setAttendingReception(true);
      }
    }

    if (name === 'formNotes') {
      if (value.includes('<') || value.includes('>')) {
        return null;
      }

      if (value !== '') {
        const newValue = `<p style="padding: 12px; font-style: italic;">${value}</p>`;

        setFormNoteText(formWeddingGuests === '0' && formReceptionGuests === '0' ? THEIR_MSG : YOUR_MSG);
        setFormNoteValues(newValue);
      } else {
        setFormNoteText(HIDE_NOTE_TEXT);
        setFormNoteValues(HIDE_NOTE_VALUES);
      }
    }

    return setValues({ ...values, [name]: value });
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let newErrors: Partial<FormValues> = initialErrors;

    if (formWeddingGuests === '' && bothEvents) {
      newErrors = { ...newErrors, formWeddingGuests: WEDDING_ERRORS };
    }
    if (formReceptionGuests === '') {
      newErrors = { ...newErrors, formReceptionGuests: RECEPTION_ERRORS };
    }

    if (Object.values(newErrors).every((value) => value === '')) {
      const docRef = doc(collection(db, 'rsvps'), guest.email);
      updateDoc(docRef, {
        rsvp: true,
        rsvpWedding: attendingWedding,
        rsvpReception: attendingReception
      });
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          (formWeddingGuests === '0' && formReceptionGuests === '0' && bothEvents) ||
            (!bothEvents && formReceptionGuests === '0')
            ? import.meta.env.VITE_TEMPLATE_DECLINE_ID
            : import.meta.env.VITE_TEMPLATE_ATTENDING_ID,
          formRef.current!,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log(result.text);
            }
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.error(error.text);
          }
        );

      updateState({
        rsvpLocal: true,
        rsvpLocalWedding: attendingWedding,
        rsvpLocalReception: attendingReception
      });
      history.push('/confirmed');
    }

    return setErrors(newErrors);
  };

  return (
    <div id="rsvps" className="rsvp-wrapper">
      <img className="rsvp-flower-1" src={Flower8} alt={FLOWER} />
      <img className="rsvp-flower-2" src={Flower4} alt={FLOWER} />
      <Header header={TITLE} />
      <div className="rsvp">
        <div className="col-12">
          <div className="rsvp-heading">
            {/* Heading and description section */}
            <h2>{SUB_TITLE}</h2>
            <p className="rsvp-heading-gifts">{GIFTS}</p>
          </div>
        </div>
        <form ref={formRef} onSubmit={submitHandler}>
          <div className="rsvp-form">
            <div className="row">
              {/* Wedding section */}
              {bothEvents && (
                <>
                  {/* Wedding - number of guests */}
                  <div className="col col-sm-6 col-12">
                    <select
                      className="rsvp-form-select"
                      onChange={changeHandler}
                      value={formWeddingGuests}
                      name="formWeddingGuests"
                    >
                      <option disabled value="">
                        {GUESTS}
                      </option>
                      <option>0</option>
                      {Array.from({ length: guests }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                    {/* Wedding - number of guests errors */}
                    {errors.formWeddingGuests && (
                      <div className="rsvp-form-error">
                        <p className="rsvp-form-error-msg">{errors.formWeddingGuests}</p>
                      </div>
                    )}
                  </div>
                  {/* Wedding - rsvp */}
                  <div className="col col-sm-6 col-12">
                    <input className="rsvp-form-input" disabled value={formWeddingRsvp} name="formWeddingRsvp" />
                  </div>
                </>
              )}
              {/* Reception section */}
              <div className="col col-sm-6 col-12">
                {/* Reception - number of guests */}
                <select
                  className="rsvp-form-select"
                  onChange={changeHandler}
                  value={formReceptionGuests}
                  name="formReceptionGuests"
                >
                  <option disabled value="">
                    {GUESTS}
                  </option>
                  <option>0</option>
                  {Array.from({ length: guests }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                {/* Reception - number of guests errors */}
                {errors.formReceptionGuests && (
                  <div className="rsvp-form-error">
                    <p className="rsvp-form-error-msg">{errors.formReceptionGuests}</p>
                  </div>
                )}
              </div>
              {/* Reception - rsvp */}
              <div className="col col-sm-6 col-12">
                <input className="rsvp-form-input" disabled value={formReceptionRsvp} name="formReceptionRsvp" />
              </div>
              {/* Special information section */}
              <div className="col-12 col-sm-12">
                <textarea
                  className="rsvp-form-textarea"
                  value={formNotes}
                  onChange={changeHandler}
                  placeholder={REQUESTS}
                  name="formNotes"
                />
              </div>
              {/* Ghost values to send to EmailJS */}
              <input type="hidden" name="formInformation" value={formInformation} />
              <input type="hidden" name="formNoteText" value={formNoteText} />
              <input type="hidden" name="formNoteValues" value={formNoteValues} />
              <input type="hidden" name="email" defaultValue={email} />
              <input type="hidden" name="family" defaultValue={family} />
            </div>
            <div className="col-12 text-center">
              {/* Handle rsvp submission */}
              <button id="submit" type="submit" className="rsvp-form-btn">
                {SUBMIT}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rsvp;
