import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';
import { GlobalStateInterface } from '@interfaces/types';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './Calendar.scss';
import {
  ADD,
  WEDDING,
  RECEPTION,
  COUPLE,
  WEDDING_LOCATION,
  RECEPTION_LOCATION,
  DESCRIPTION,
  TIMEZONE,
  STYLING,
  RECEPTION_END_DATE,
  RECEPTION_END_TIME,
  RECEPTION_START_DATE,
  RECEPTION_START_TIME,
  WEDDING_END_DATE,
  WEDDING_END_TIME,
  WEDDING_START_DATE,
  WEDDING_START_TIME
} from './Constants';

const Calendar: React.FC = () => {
  const { guest, rsvpLocalWedding, rsvpLocalReception } = useContext(GlobalContext) as GlobalStateInterface;
  const { rsvpWedding, rsvpReception } = guest;

  return (
    <div className="calendar-wrapper">
      <p className="calendar-text">{ADD}</p>
      <div className="calendar-content">
        {(rsvpWedding || rsvpLocalWedding) && (
          <div className="calendar-content-btn">
            <AddToCalendarButton
              label={WEDDING}
              size="2|1|0"
              hideCheckmark
              name={`${COUPLE} ${WEDDING}`}
              location={WEDDING_LOCATION}
              description={DESCRIPTION}
              timeZone={TIMEZONE}
              startDate={WEDDING_START_DATE}
              startTime={WEDDING_START_TIME}
              endDate={WEDDING_END_DATE}
              endTime={WEDDING_END_TIME}
              options={['Apple', 'Google', 'Outlook.com']}
              hideBackground
              lightMode="light"
              hideBranding
              styleLight={STYLING}
            />
          </div>
        )}
        {(rsvpReception || rsvpLocalReception) && (
          <div className="calendar-content-btn">
            <AddToCalendarButton
              label={RECEPTION}
              size="2|1|0"
              hideCheckmark
              name={`${COUPLE} ${RECEPTION}`}
              location={RECEPTION_LOCATION}
              description={DESCRIPTION}
              timeZone={TIMEZONE}
              startDate={RECEPTION_START_DATE}
              startTime={RECEPTION_START_TIME}
              endDate={RECEPTION_END_DATE}
              endTime={RECEPTION_END_TIME}
              options={['Apple', 'Google', 'Outlook.com']}
              hideBackground
              lightMode="light"
              hideBranding
              styleLight={STYLING}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
