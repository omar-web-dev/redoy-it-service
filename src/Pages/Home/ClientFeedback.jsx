import { useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { FaWhatsapp } from "react-icons/fa";
import { API_URL } from "../../Components/API_URL";

SwiperCore.use([Navigation]);

export default function ClientFeedback() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef1 = useRef(null);
  const [showWhatsappNumber, setShowWhatsappNumber] = useState(false);

  const handleWhatsappIconClick = () => {
    setShowWhatsappNumber(!showWhatsappNumber);
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}reviews`);
      const data = await response.json();
      setReviews(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    new SwiperCore(".swiper1", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="-mt-60  w-[100%] ">
      <div className="bg-[#054ada] pt-60 rounded-[100%] pb-20 rounded-se-none rounded-ss-none">
        <div className="h-[230px] md:h-[160px] rounded-lg w-[90%] md:w-[75%] lg:max-w-[650px] mx-auto">
          <Swiper className="h-full swiper-wrapper relative" ref={swiperRef1}>
            {loading ? (
              <div
                id="loading-component"
                className="absolute top-1/2 -translate-x-1/2 translate-y-1/2 left-1/2 h-full items-center justify-center"
              >
                <progress className="progress w-56"></progress>
              </div>
            ) : (
              <>
                {reviews.map((review, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="bg-white rounded-lg shadow-md p-4 flex px-10">
                      <div className="w-full">
                        <div className="flex justify-between ">
                          <div className="flex justify-start items-center">
                            <div className="h-[60px] w-[60px] mr-4">
                              <img
                                src={review?.profilePicture}
                                alt={review?.name}
                                className="rounded-full"
                              />
                            </div>
                            <div>
                              <h2 className="text-lg font-bold">
                                {review?.name}
                              </h2>
                              <div className="flex items-center mt-1">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
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
                                  )
                                )}
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
                          <p className="mt-3">{review?.textMe}</p>
                          {showWhatsappNumber && (
                            <p className="mt-3 text-gray-500">
                              {review.whatsappNumber}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
