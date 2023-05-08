import { FaExternalLinkAlt } from "react-icons/fa";
import ServiceCards from "./ServiceCards";

const SEOService = () => {
  return (
    <div className="lg:mt-40">
      <h2 className="medium_header mb-10">Our Affordable SEO Service</h2>
      <p className="px-3 sm_pre_text text-center ">
        We have been providing premium quality SEO services for over
        four years. We have done more than 3,000+ projects and are always ranked
        at the top position in Google search results. We deliver world-class SEO
        services to all types of businesses.
      </p>
      <p className="sm_pre_text text-[#1969bf] mt-4 text-center">
        <span className=" mx-2 cursor-pointer">
          <FaExternalLinkAlt className="w-20px inline-block mr-1" />
          contact us.
        </span>
        WordPress SEO Service
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-8 mt-10">
      <ServiceCards></ServiceCards>
      <ServiceCards></ServiceCards>
      <ServiceCards></ServiceCards>
      <ServiceCards></ServiceCards>
      <ServiceCards></ServiceCards>
      <ServiceCards></ServiceCards>
      </div>
    </div>
  );
};

export default SEOService;
