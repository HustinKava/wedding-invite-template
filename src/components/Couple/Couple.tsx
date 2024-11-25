import Header from '@components/Header/Header';
import Flower6 from '@images/flowers/flower-6.png';
import './Couple.scss';
import { COUPLE, GROOM, BRIDE, TITLE1, TITLE2 } from './Constants';

const Couple: React.FC = () => {
  return (
    <div id="couple" className="couple-wrapper">
      <img className="couple-flower" src={Flower6} alt="flower" />
      <div className="couple">
        <Header header={COUPLE} />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="couple-content">
                <div className="couple-content-img">
                  <img src="https://placehold.co/1522x2280" alt={GROOM} />
                </div>
                <div className="couple-content-text">
                  <h3>{TITLE1}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="couple-content">
                <div className="couple-content-img">
                  <img src="https://placehold.co/1522x2280" alt={BRIDE} />
                </div>
                <div className="couple-content-text">
                  <h3>{TITLE2}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
