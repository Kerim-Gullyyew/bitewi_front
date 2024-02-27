import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      className="custom-swiper"
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      loop={true}
      speed={10000}
      autoplay={{
        disableOnInteraction: false,
        delay: 0,
      }}
    >
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      <SwiperSlide><img className='' src="/logos/next.svg" alt="Next.js" /></SwiperSlide>
      
    </Swiper>
  );
};

export default SwiperComponent;
