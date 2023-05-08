import { useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { FaWhatsapp } from "react-icons/fa";

SwiperCore.use([Navigation]);

export default function ClientFeedback() {
  const swiperRef = useRef(null);
  const [showWhatsappNumber, setShowWhatsappNumber] = useState(false);

  const handleWhatsappIconClick = () => {
    setShowWhatsappNumber(!showWhatsappNumber);
  };

  const cards = {
    name: "John Doe",
    profilePicture: "https://example.com/profile_picture.jpg",
    rating: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod semper odio, id congue dolor malesuada non.",
    whatsappNumber: "+123456789",
  };
  const { name, rating, text, whatsappNumber } = cards;

  useEffect(() => {
    const swiper = new SwiperCore(".swiper", {
      slidesPerView: 1,
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
    <div className="-mt-4 bg-[url('https://i.ibb.co/DCyW2Dn/Screenshot-22.png')] w-full pt-20 ">
      <div className="h-[230px] md:h-[160px] bg-gray-50 rounded-lg w-[90%] md:w-[75%] lg:max-w-[650px] mx-auto">
          <Swiper className="h-full" ref={swiperRef}>
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="bg-white rounded-lg shadow-md p-4 flex px-10">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex justify-start items-center">
                        <div className="h-[60px] w-[60px] mr-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-chSaIF9njue_k3ilQ-tScekjf7xyUhtsv19EO112p7PTZXBmhFVLDKVoM49IcIOeQU&s"
                            alt="Profile Picture"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">{name}</h2>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: rating }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 text-yellow-500 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19.642,7.684l-5.554-0.802L10.842,1.68c-0.246-0.495-0.963-0.495-1.209,0l-3.246,5.202l-5.554,0.802c-0.542,0.078-0.758,0.746-0.354,1.153l4,3.901L3.6,18.32c-0.246,0.495-0.028,1.075,0.495,1.271l5.554,1.905l3.246,5.202c0.246,0.495,0.963,0.495,1.209,0l3.246-5.202l5.554-1.905c0.523-0.195,0.741-0.775,0.495-1.27l-2.303-7.303l4-3.902C20.4,8.429,20.184,7.763,19.642,7.684z"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button onClick={handleWhatsappIconClick}>
                          <FaWhatsapp
                            size={24}
                            className="ml-4 text-green-500"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mt-3">{text}</p>
                      {showWhatsappNumber && (
                        <p className="mt-3 text-gray-500">{whatsappNumber}</p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg-white rounded-lg shadow-md p-4 flex px-10">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex justify-start items-center">
                        <div className="h-[60px] w-[60px] mr-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-chSaIF9njue_k3ilQ-tScekjf7xyUhtsv19EO112p7PTZXBmhFVLDKVoM49IcIOeQU&s"
                            alt="Profile Picture"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">{name}</h2>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: rating }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 text-yellow-500 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19.642,7.684l-5.554-0.802L10.842,1.68c-0.246-0.495-0.963-0.495-1.209,0l-3.246,5.202l-5.554,0.802c-0.542,0.078-0.758,0.746-0.354,1.153l4,3.901L3.6,18.32c-0.246,0.495-0.028,1.075,0.495,1.271l5.554,1.905l3.246,5.202c0.246,0.495,0.963,0.495,1.209,0l3.246-5.202l5.554-1.905c0.523-0.195,0.741-0.775,0.495-1.27l-2.303-7.303l4-3.902C20.4,8.429,20.184,7.763,19.642,7.684z"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button onClick={handleWhatsappIconClick}>
                          <FaWhatsapp
                            size={24}
                            className="ml-4 text-green-500"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mt-3">{text}</p>
                      {showWhatsappNumber && (
                        <p className="mt-3 text-gray-500">{whatsappNumber}</p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg-white rounded-lg shadow-md p-4 flex px-10">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex justify-start items-center">
                        <div className="h-[60px] w-[60px] mr-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-chSaIF9njue_k3ilQ-tScekjf7xyUhtsv19EO112p7PTZXBmhFVLDKVoM49IcIOeQU&s"
                            alt="Profile Picture"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">{name}</h2>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: rating }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 text-yellow-500 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19.642,7.684l-5.554-0.802L10.842,1.68c-0.246-0.495-0.963-0.495-1.209,0l-3.246,5.202l-5.554,0.802c-0.542,0.078-0.758,0.746-0.354,1.153l4,3.901L3.6,18.32c-0.246,0.495-0.028,1.075,0.495,1.271l5.554,1.905l3.246,5.202c0.246,0.495,0.963,0.495,1.209,0l3.246-5.202l5.554-1.905c0.523-0.195,0.741-0.775,0.495-1.27l-2.303-7.303l4-3.902C20.4,8.429,20.184,7.763,19.642,7.684z"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button onClick={handleWhatsappIconClick}>
                          <FaWhatsapp
                            size={24}
                            className="ml-4 text-green-500"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mt-3">{text}</p>
                      {showWhatsappNumber && (
                        <p className="mt-3 text-gray-500">{whatsappNumber}</p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg-white rounded-lg shadow-md p-4 flex px-10">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex justify-start items-center">
                        <div className="h-[60px] w-[60px] mr-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-chSaIF9njue_k3ilQ-tScekjf7xyUhtsv19EO112p7PTZXBmhFVLDKVoM49IcIOeQU&s"
                            alt="Profile Picture"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">{name}</h2>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: rating }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 text-yellow-500 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19.642,7.684l-5.554-0.802L10.842,1.68c-0.246-0.495-0.963-0.495-1.209,0l-3.246,5.202l-5.554,0.802c-0.542,0.078-0.758,0.746-0.354,1.153l4,3.901L3.6,18.32c-0.246,0.495-0.028,1.075,0.495,1.271l5.554,1.905l3.246,5.202c0.246,0.495,0.963,0.495,1.209,0l3.246-5.202l5.554-1.905c0.523-0.195,0.741-0.775,0.495-1.27l-2.303-7.303l4-3.902C20.4,8.429,20.184,7.763,19.642,7.684z"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button onClick={handleWhatsappIconClick}>
                          <FaWhatsapp
                            size={24}
                            className="ml-4 text-green-500"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mt-3">{text}</p>
                      {showWhatsappNumber && (
                        <p className="mt-3 text-gray-500">{whatsappNumber}</p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg-white rounded-lg shadow-md p-4 flex px-10">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex justify-start items-center">
                        <div className="h-[60px] w-[60px] mr-4">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-chSaIF9njue_k3ilQ-tScekjf7xyUhtsv19EO112p7PTZXBmhFVLDKVoM49IcIOeQU&s"
                            alt="Profile Picture"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">{name}</h2>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: rating }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 text-yellow-500 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19.642,7.684l-5.554-0.802L10.842,1.68c-0.246-0.495-0.963-0.495-1.209,0l-3.246,5.202l-5.554,0.802c-0.542,0.078-0.758,0.746-0.354,1.153l4,3.901L3.6,18.32c-0.246,0.495-0.028,1.075,0.495,1.271l5.554,1.905l3.246,5.202c0.246,0.495,0.963,0.495,1.209,0l3.246-5.202l5.554-1.905c0.523-0.195,0.741-0.775,0.495-1.27l-2.303-7.303l4-3.902C20.4,8.429,20.184,7.763,19.642,7.684z"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button onClick={handleWhatsappIconClick}>
                          <FaWhatsapp
                            size={24}
                            className="ml-4 text-green-500"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mt-3">{text}</p>
                      {showWhatsappNumber && (
                        <p className="mt-3 text-gray-500">{whatsappNumber}</p>
                      )}
                    </div>
                  </div>
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
