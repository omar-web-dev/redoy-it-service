import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SEOService = () => {
  const serviceContent = [
    {
      id: 1,
      title: "On page SEO",
      description:
        "On-page SEO is the backbone of your online website ranking presence, so you should focus yours on page optimization for search engines. It is one of the very first steps to making money with a website. On-page optimization is a process that involves optimizing a website’s elements and its content to be easy for the visitor to read, use, and understand. Our goal is to make your website more attractive to search engines, therefore increasing the number of people who visit it and make your site profitable.      ",
    },
    {
      id: 2,
      title: "Content Writing",
      description:
        "Our content writing services will help you create quality and engaging content for your website. Quality content allows you to communicate with your customers and build trust in your brand. If you don’t have time to write content, consider hiring our professional content writing service for your business. Our well-written piece will help you grow your audience and create loyalty among your followers. We believe that good content is the key to online success.",
    },
    {
      id: 3,
      title: "Local SEO",
      description:
        "Local SEO is all about getting your website to rank highly in Google search results for keywords specific to your area. This could be your city, neighborhood, or even just a specific road. However, there are other factors that can impact local SEO as well. Local SEO optimization services provide the right tools and strategies to get you ahead of the competition and ensure that you stand out from the crowd.",
    },
    {
      id: 4,
      title: "Off page SEO",
      description:
        "If you want to make money online, then there is no way around it without off-page SEO. You need to be ranked on the first page of Google. You need a quality off-page optimization that ranks well in Google search results. Our goal is to rank your targeted keywords in search engines through off-page optimization.",
    },
    {
      id: 5,
      title: "Whitehat Backlinks",
      description:
        "Backlink Building is the process of acquiring links from related websites to your own website. If you want your site to be ranked high in Google and other search engines, then Backlinks are still one of the best ways to improve search engine rankings.",
    },
    {
      id: 6,
      title: "Shopify SEO",
      description:
        "Our Shopify SEO service is an easy way to help you get more customers and make more sales. We create Shopify store websites that rank well in search engine results, and we also offer Shopify SEO consultations to give you the best advice on how to get your store’s page to rank high in Google and other search engines.",
    },
  ];
  return (
    <div className="lg:mt-40">
      <h2 className="medium_header mb-10">Our Affordable SEO Service</h2>
      <p className="px-3 sm_pre_text text-center ">
        We have been providing premium quality SEO services for over four years.
        We have done more than <span className="font-bold">3,000+</span>{" "}
        projects and are always ranked at the top position in Google search
        results. We deliver world-class SEO services to all types of businesses.
      </p>
      <p className="sm_pre_text text-[#1969bf] mt-4 text-center">
        <Link
          to="wordpress-seo-service"
          className=" mx-2 cursor-pointer flex items-center justify-center underline"
        >
          <FaExternalLinkAlt className="mr-2 w-20px inline-block " />
          <span className="pr-1">WordPress SEO Service</span>
        </Link>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-8 mt-10">
        {serviceContent.map((service) => (
          <>
            <div key={service.id} className="rounded-2xl shadow-xl p-9">
              <h4 className="card_header mb-3">{service.title}</h4>
              <p className="sm_pre_text">{service.description} </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SEOService;
