import { FaExternalLinkAlt, FaRocket } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="pb-4 lg:h-screen bg-[#054ada]">
      <div className="max-w-[1200px] px-3 mx-auto flex flex-col items-center pt-32 md:pt-64 justify-center">
        <h1 className="text-4xl font-bold sm_d_h1 md:header">Redoyislam</h1>
        <h2 className="text-2xl font-medium mt-4 sm_d_h2 md:medium_header text-gray-50">
          Website Design And SEO Service
        </h2>
        <p className=" my-8 text-lg text-gray-50  font-bold md:max-w-[90%] lg:75 pre_text text-center">
          Redoyislam is a website design and SEO service provider. We offer
          high-quality, affordable website design and SEO services to small
          businesses and entrepreneurs. We have years of experience in the
          website design and SEO industry, and we’re passionate about helping
          our clients grow their businesses online. If you need a reliable,
          affordable website design and SEO service,
          <span className="text-[#ffcc1d] mx-2 cursor-pointer">
            <FaExternalLinkAlt className="w-20px inline-block mr-1" />
            contact us.
          </span>
          We would be happy to help you get started online!
        </p>
        <p className="px-2 py-2 bg-[#8e9172]  rounded-full transition duration-300 hover:bg-[#ffcc1d] transform hover:scale-110 ">
          <button className="flex justify-center items-center px-4 py-2 bg-[#ffcc1d] text-black font-bold rounded-full transition duration-300 hover:bg-[#ffcc1d] transform text-xl  hover:scale-80">
            <FaRocket className="mr-2 text-xl" />
            FREE SEO AUDIT
          </button>
        </p>
      </div>
    </div>
  );
};

export default Banner;
