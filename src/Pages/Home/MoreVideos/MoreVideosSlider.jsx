import { useEffect, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

export default function ClientFeedback() {
  const swiperRef = useRef(null);


  useEffect(() => {
    const swiper = new SwiperCore(".swiper", {
      slidesPerView: 2,
      direction: getDirection(1),
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection(1));
        },
      },
    });

    function getDirection() {
      const windowWidth = window.innerWidth;
      const direction = windowWidth <= 760 ? "vertical" : "horizontal";

      return direction;
    }
  }, []);

  return (
    <div>
      <div className="h-[350px] bg-gray-50 rounded-lg ">
        <Swiper className="h-full px-10" ref={swiperRef}>
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="bg-white rounded-lg p-8 flex px-10">
                <img 
                className="w-full h-full rounded-lg"
                  src="https://redoyislam.com/wp-content/uploads/2022/01/global-translationsuk.jpg"
                  alt="Profile Picture"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="bg-white rounded-lg p-8 flex px-10">
                <img 
                className="w-full h-full rounded-lg"
                  src="https://redoyislam.com/wp-content/uploads/2022/01/global-translationsuk.jpg"
                  alt="Profile Picture"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="bg-white rounded-lg p-8 flex px-10">
                <img 
                className="w-full h-full rounded-lg"
                  src="https://redoyislam.com/wp-content/uploads/2022/01/global-translationsuk.jpg"
                  alt="Profile Picture"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="bg-white rounded-lg p-8 flex px-10">
                <img 
                className="w-full h-full rounded-lg"
                  src="https://redoyislam.com/wp-content/uploads/2022/01/global-translationsuk.jpg"
                  alt="Profile Picture"
                />
              </div>
            </SwiperSlide>
            
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
}
