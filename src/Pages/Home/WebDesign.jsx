
import ServiceCards from "./Service/ServiceCards";

const SEOService = () => {
  return (
    <div className="mt-40 mb-20">
      <h2 className="medium_header mb-10">Our Affordable Web Design</h2>
      <p className="sm_pre_text text-center ">
        Web design has become an important part of the way people interact with
        one another online. With our affordable web designs, you can build a
        strong brand for yourself and attract new customers!
      </p>
      
      <div className="grid grid-cols-3 gap-8 mt-10">
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
