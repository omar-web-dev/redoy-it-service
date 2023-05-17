import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {  SwiperSlide } from "swiper/react";


const ClientFeedbackCard = (cards) => {
  console.log(cards)
    const [showWhatsappNumber, setShowWhatsappNumber] = useState(false);
    const { name, rating, text, whatsappNumber } = card;

  const handleWhatsappIconClick = () => {
    setShowWhatsappNumber(!showWhatsappNumber);
  };
  return (
    <div>card</div>
  );
};

export default ClientFeedbackCard;
