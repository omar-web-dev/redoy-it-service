import { useState } from "react";
import { FaRegTimesCircle, FaRocket } from "react-icons/fa";
import Analyze from "../Analyze";

const Popup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="">
      <div
        onClick={openPopup}
        className="inline-block px-2 py-2 bg-[#8e9172]  rounded-full transition duration-300 hover:bg-[#ffcc1d] transform hover:scale-110 "
      >
        <button className="flex justify-center items-center px-4 py-2 bg-[#ffcc1d] text-black font-bold rounded-full transition duration-300 hover:bg-[#ffcc1d] transform text-xl  hover:scale-80">
          <FaRocket className="mr-2 text-xl" />
          FREE SEO AUDIT
        </button>
      </div>
      {/* <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        
      >
        Open Popup
      </button> */}

      {isPopupOpen && (
        <div className="fixed inset-0 h-screen w-full navbar-bg flex items-center justify-center z-50">
          <div className="inset-0 flex items-center justify-center  opacity-100 z-50">
            <div className=" bg-white rounded-lg p-8 shadow-lg w-[600px]">
              <div className="flex justify-end">
                <button
                  className="p-2 bg-red-100 text-red-300 rounded-full hover:bg-red-200 hover:text-red-600"
                  onClick={closePopup}
                >
                  <FaRegTimesCircle />
                </button>
              </div>
              {/* Popup content goes here */}
              <Analyze />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
