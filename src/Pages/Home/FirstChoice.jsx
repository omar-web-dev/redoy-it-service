import { FaStopCircle } from "react-icons/fa";

const FirstChoice = () => {
  return (
    <div className="bg-[#e2ecf7] ">
      <div className="max-w-[1200px] pt-7 px-3  mx-auto grid grid-cols-1 md:grid-cols-2 mt-7 md:mt-20 gap-8 ">
        <div className="">
          <h2 className="sm_d_h2 md:medium_header md:text-left mb-4">
            Why Should WordPress Be Your First Choice?
          </h2>
          <p className="sm_pre_text mb-8">
            WordPress is a great choice for anyone who wants to share their
            ideas with the world. It features an extensive collection of
            plugins, themes and tools that help you build your website from
            scratch or customize one already in existence! Millions use
            WordPress every day – it’s safe bet when looking into how best
            handle site management online today
          </p>
          <p className="sm_pre_text">
            It has become so popular because this software offers everything
            needed: ease-of access via mobile devices as well desktops; powerful
            feature set allowing developers maximum control over content
            creation possibilities redoyislam
          </p>
          <img
            className="-mt-6 cover mx-auto"
            src="https://redoyislam.com/wp-content/uploads/2022/01/wordpress-seo-services.png"
            alt=""
          />
        </div>

        {/* right side */}
        <div className=" rounded">
          <h4 className="card_header text_star mb-4">
            Here Are Five Important Reasons To Use WordPress
          </h4>
          <p className="sm_pre_text py-3">
            <FaStopCircle className="inline-block mr-2 text-blue-500" />
            WordPress is a flexible and easy-to-use content management system.
          </p>
          <p className="sm_pre_text  py-3">
            <FaStopCircle className="inline-block mr-2 text-blue-500" />
            WordPress is easy to use for beginners in website design.
            Unfortunately, too many excellent technologies are out of reach for
            complete beginners. Because WordPress is not too complicated, it
            makes a great starting point to use at home or in your small
            business right away.
          </p>
          <p className="sm_pre_text  py-3">
            <FaStopCircle className="inline-block mr-2 text-blue-500" />
            WordPress offers thousands of free plugins. In addition, wordPress
            comes with hundreds of helpful extras, so you can augment the
            default website right away and save yourself a lot of o money in the
            long run as your business grows.
          </p>
          <p className="sm_pre_text  py-3">
            <FaStopCircle className="inline-block mr-2 text-blue-500" />
            WordPress is used by millions of users and has a high reputation for
            security.
          </p>
          <p className="sm_pre_text  py-3">
            <FaStopCircle className="inline-block mr-2 text-blue-500" />
            WordPress makes it easy to manage changes in multiple templates or
            add style sheets easily across pages without having to edit HTML
            code after every change.
          </p>

        </div>
      </div>
    </div>
  );
};

export default FirstChoice;
