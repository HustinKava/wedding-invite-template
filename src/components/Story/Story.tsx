import Header from '@components/Header/Header';
import Flower1 from '@images/flowers/flower-1.png';
import Flower5 from '@images/flowers/flower-5.png';
import Flower7 from '@images/flowers/flower-7.png';
import './Story.scss';
import { TITLE, SUB_TITLE1, CONTENT1, SUB_TITLE2, CONTENT2, SUB_TITLE3, CONTENT3, STORY, FLOWER } from './Constants';

const Story: React.FC = () => {
  return (
    <section id="story" className="story-wrapper">
      <img className="story-flower" src={Flower1} alt={FLOWER} />
      <Header header={TITLE} />

      <div className="story-deco">
        <span className="story-deco-item" />
      </div>

      <div className="story-line">
        <div className="story-line-deco" />
        <div className="story story-left">
          <div className="story-img story-left-img">
            <img src="https://placehold.co/945x630" alt={STORY} />
          </div>
          <div className="story-content story-left-content">
            <h3 className="story-content-title">{SUB_TITLE1}</h3>
            <p className="story-content-para">{CONTENT1}</p>
          </div>
        </div>

        <div className="story-deco">
          <span className="story-deco-item2" />
        </div>

        <div className="story story-right">
          <img className="story-right-flower" src={Flower5} alt={FLOWER} />
          <div className="story-content story-right-content">
            <h3 className="story-content-title">{SUB_TITLE2}</h3>
            <p className="story-content-para">{CONTENT2}</p>
          </div>
          <div className="story-img story-right-img">
            <img src="https://placehold.co/945x630" alt={STORY} />
          </div>
        </div>

        <div className="story-deco">
          <span className="story-deco-item2" />
        </div>

        <div className="story story-left">
          <div className="story-img story-left-img">
            <img src="https://placehold.co/945x630" alt={STORY} />
          </div>
          <div className="story-content story-left-content">
            <h3 className="story-content-title">{SUB_TITLE3}</h3>
            <p className="story-content-para">{CONTENT3}</p>
          </div>
          <img className="story-left-flower" src={Flower7} alt={FLOWER} />
        </div>
      </div>
      <div className="story-deco">
        <span className="story-deco-item3" />
      </div>
    </section>
  );
};

export default Story;
