import Popup from "../../Components/Popup/Popup";

const Banner = () => {
  return (
    <div className="pb-4 lg:h-screen">
      <div className="max-w-[1200px] px-3 mx-auto flex flex-col items-center pt-32 md:pt-48 justify-center">
        <h1 className="text-4xl font-bold sm_d_h1 text-gray-900">IT Core Ltd.</h1>
        <h2 className="text-2xl font-medium mt-4 lg:px-36 sm_d_h2 md:medium_header text-gray-900">
          Professional Search Engine Optimization (SEO) Service Agency.
        </h2>
        <p className="text-center lg:px-60 my-8 text-lg text-gray-900  font-bold md:max-w-[90%] lg:75 pre_text">
              Redoyislam is a website design and SEO service provider. We offer
              high-quality, affordable website design and SEO services to small,
              We would be happy to help you get started online!
            </p>
        <Popup/>
      </div>
    </div>
  );
};

export default Banner;
