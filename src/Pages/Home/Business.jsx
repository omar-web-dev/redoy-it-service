import { FaRocket } from "react-icons/fa";

const Business = () => {
  return (
    <div className="pt-20 bg-[#dfedf8]">
      <h2 className="medium_header mb-10">
        We Are Here To Help You Grow Your Business.
      </h2>
      <p className="sm_pre_text text-center max-w-2xl mx-auto">
        We are more than just an agency,we provide services that help you grow
        your business. Reach out to us if there’s anything else I can do for my
        clients!
      </p>
      <div className="flex justify-center mt-10">
        <div className="px-2 py-2 text-center  bg-[#f1db80]  rounded-full transition duration-300 hover:bg-[#ffcc1d] transform hover:scale-110 ">
          <button className="flex justify-center items-center px-4 py-2 bg-[#FFCC1D] text-black font-bold rounded-full transition duration-300 hover:bg-[#ffcc1d] transform text-xl  hover:scale-80">
            <FaRocket className="mr-2 text-xl" />
            GET FREE CONSULTANT
          </button>
        </div>
      </div>
      <div className="flex mt-28 justify-end pr-32 bg-[#054ada]">
        <img
          className="-mt-60 "
          src="https://redoyislam.com/wp-content/uploads/2021/12/Untitled-7.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Business;
