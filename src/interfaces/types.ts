export interface HeaderInterface {
  header: string;
}

export interface Section {
  section: string;
}

export interface FormValues {
  formWeddingGuests: string;
  formWeddingRsvp: string;
  formReceptionGuests: string;
  formReceptionRsvp: string;
  formNotes: string;
}

export interface Data {
  email: string;
  bothEvents: boolean;
  family: string;
  guests: number;
  side: string;
  rsvpWedding: boolean;
  rsvpReception: boolean;
  viewed: boolean;
  rsvp: boolean;
}

/**
 * Represents the global state of the application.
 */
export interface GlobalStateInterface {
  guests: Data[];
  guest: Data;
  validEmail: boolean;
  rsvpLocal: boolean;
  rsvpLocalWedding: boolean;
  rsvpLocalReception: boolean;
  updateState: (stateUpdates: Partial<GlobalStateInterface>) => void;
}
