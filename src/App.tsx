import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '@utils/GlobalContext';
import { GlobalStateInterface } from '@interfaces/types';
import EmailValidation from '@pages/EmailValidation/EmailValidation';
import Homepage from '@pages/HomePage/HomePage';
import RsvpConfirmed from '@pages/RsvpConfirmed/RsvpConfirmed';
import Scrollbar from '@components/Scrollbar/Scrollbar';

const App = () => {
  const { validEmail, rsvpLocal } = useContext(GlobalContext) as GlobalStateInterface;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/validation" component={EmailValidation} />
          {rsvpLocal && <Route path="/confirmed" component={RsvpConfirmed} />}
          {validEmail && <Route path="/home" component={Homepage} />}
          <Route path="/" component={EmailValidation} />
          <Redirect to="/" />
        </Switch>
        {!rsvpLocal && validEmail && <Scrollbar />}
      </Router>
    </div>
  );
};

export default App;
