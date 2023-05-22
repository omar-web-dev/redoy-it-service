import Popup from "../../Components/Popup/Popup";

const Banner = () => {
  return (
    <div className="pb-4 lg:h-screen bg-[#00b894]">
      <div className="max-w-[1200px] px-3 mx-auto flex flex-col items-center pt-32 md:pt-44 justify-center">
        <h1 className="text-4xl font-bold sm_d_h1 md:header">It Care LTD.</h1>
        <h2 className="text-2xl font-medium mt-4 lg:px-36 sm_d_h2 md:medium_header text-gray-50">
          Professional Search Engine Optimization (SEO) Service Agency.
        </h2>
        <div className="flex px-32">
          <div className="mx-auto">
            <p className=" my-8 text-lg text-gray-50  font-bold md:max-w-[90%] lg:75 pre_text">
              Redoyislam is a website design and SEO service provider. We offer
              high-quality, affordable website design and SEO services to small,
              We would be happy to help you get started online!
            </p>
            <Popup/>
            
          </div>
          <div className="w-4/5">
            <img
              className="h-full w-full"
              src="https://i.ibb.co/MpmZ5BQ/h6-image-2.png"
              alt="h6-image-2"
              border="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
