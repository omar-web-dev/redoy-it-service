
import ServiceCards from "./Service/ServiceCards";

const SEOService = () => {
  return (
    <div className="mt-7 md:mt-24 mb-20 px-3">
      <h2 className="medium_header mb-10">Our Affordable Web Design</h2>
      <p className="sm_pre_text text-center ">
        Web design has become an important part of the way people interact with
        one another online. With our affordable web designs, you can build a
        strong brand for yourself and attract new customers!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-3 gap-8 mt-10">
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
