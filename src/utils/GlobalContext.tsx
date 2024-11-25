import { createContext, useState, FC, ReactNode } from 'react';
import { GlobalStateInterface } from '@interfaces/types';
import GuestSchema from '@data/guests';

const guest = {
  email: '',
  bothEvents: false,
  family: '',
  guests: 0,
  side: '',
  rsvpWedding: false,
  rsvpReception: false,
  viewed: false,
  rsvp: false
};

export const GlobalContext = createContext<GlobalStateInterface>({
  guests: GuestSchema,
  guest,
  validEmail: false,
  rsvpLocal: false,
  rsvpLocalWedding: false,
  rsvpLocalReception: false,
  updateState: () => {}
});

const GlobalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GlobalStateInterface>({
    guests: GuestSchema,
    guest,
    validEmail: false,
    rsvpLocal: false,
    rsvpLocalWedding: false,
    rsvpLocalReception: false,
    updateState: (stateUpdates) => {
      setState((currentState) => ({ ...currentState, ...stateUpdates }));
    }
  });
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
