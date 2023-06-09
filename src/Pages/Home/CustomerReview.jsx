import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  const rating = 5;
  return (
    <div className="max-w-[1200px] md:mt-24 px-3 mx-auto">
      <h2 className="sm_d_h2 md:medium_header">Happy Customer Reviews</h2>
      <div className="flex items-center justify-center mt-3 mb-10">
        {Array.from({ length: rating }).map((i) => (
          <FaStar className="text-orange-500 text-3xl" key={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 ">
        <div className="">
          <p className="sm_pre_text mb-8">
            “RedoyIslam” company helps you to increase your site traffic. We’ve
            assisted over 3,000 WordPress sites in their SEO strategies, which
            are 100% white-hat, safe, and Google-friendly. Our WordPress SEO
            experts will provide you with the best results than any other
            wordpress SEO agency. For your business,
          </p>
          <p className="sm_pre_text">
            we will do everything to boost your website’s ranking on search
            engines like Google, Yahoo, and Bing. We will also help you to get a
            better ranking in search engines. We offer affordable SEO packages
            that will get you ranked on Google
          </p>
        </div>
        <div className=" rounded">
          <img
            className="rounded-lg shadow-2xl w-full h-full md:h-auto"
            src="https://redoyislam.com/wp-content/uploads/2021/12/Customer-satisfaction.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
