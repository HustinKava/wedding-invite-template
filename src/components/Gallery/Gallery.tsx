import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Header from '@components/Header/Header';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Gallery.scss';
import { TITLE } from './Constants';

const Gallery: React.FC = () => {
  return (
    <div id="gallery" className="gallery-wrapper">
      <Header header={TITLE} />
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        }}
        spaceBetween={30}
        freeMode
        loop
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1024x968" alt={TITLE} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
