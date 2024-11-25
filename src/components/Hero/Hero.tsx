import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div id="home" className="hero-wrapper">
      <Swiper
        className="mySwiper"
        loop
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div>
            <img src="https://placehold.co/1380x920" alt="couple" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://placehold.co/1380x920" alt="couple" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://placehold.co/1380x920" alt="couple" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
