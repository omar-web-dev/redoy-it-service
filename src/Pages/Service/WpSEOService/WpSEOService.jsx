import { FaChartLine, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import ContactForm from "../../../Components/ContactForm";
import { Link } from "react-router-dom";

const WpSEOService = () => {
  return (
    <div>
      {/* ************************* Header ********************* */}

      <div>
        <div className="py-52 pb-32 bg-[#054ada]">
          <h1 className="text-center sm_d_h1 px-3 md:header">
            WordPress SEO Service
          </h1>
        </div>
        <img
          className="w-full h-[100px]"
          src="https://i.ibb.co/tBKp0JK/Screenshot-1.png"
          alt="Screenshot-1"
          border="0"
        />
      </div>

      {/* ************************* For Your Business ********************* */}
      <div className="max-w-[1200px] mx-auto px-3">
        <h2 className="md:sm_d_h2 my-10 md:medium_header sm_d_h2 mt-20 mb-8">
          Peace Of Mind For Your Business
        </h2>
        <h4 className="sm_pre_text text-center px-3">
          Do you feel like your WordPress website is not performing as well as
          it should on the internet? Do people who visit your website leave
          without purchasing anything or signing up for your newsletter? Our
          WordPress Seo team is ready to help. They will optimize and organize
          WordPress to make sure that your business is represented in a positive
          way online. We offer services such as keyword research and
          optimization, XML sitemaps, social media integration, hiring writers
          with expertise in different areas of WordPress, and much more!
        </h4>
        <div className="mt-10">
          <video
            className="w-full h-full object-cover"
            src="https://youtu.be/8pNdB3hRfvU"
            controls
          />
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/contact"
            className="px-2 py-2 text-center  bg-[#f1db80]  rounded-full transition duration-300 hover:bg-[#ffcc1d] transform hover:scale-110 "
          >
            <button className="flex justify-center uppercase items-center px-4 py-2 bg-[#FFCC1D] text-black font-bold rounded-full transition duration-300 hover:bg-[#ffcc1d] transform text-xl  hover:scale-80">
              <FaRocket className="mr-2 text-xl " />
              Send me a proposal
            </button>
          </Link>
        </div>
      </div>
      {/* ************************* I Care About It? ********************* */}

      <div className="bg-[#e2ecf7] mt-20 px-3">
        <div className="max-w-[1200px] py-20 mx-auto ">
          <h2 className="sm_d_h2 md:sm_d_h2 my-10 md:medium_header mb-4 text-center">
            What Is SEO, And Why Should I Care About It?
          </h2>
          <div className="grid md:grid-cols-2 mt-20  gap-8 ">
            <div className="">
              <p className="sm_pre_text mb-4 -mt-8 text-justify">
                SEO stands for search engine optimization. With our process,
                your WordPress website will get a high ranking on Google, Bing,
                and Yahoo! Search engines like these want people to find their
                websites quickly and easily, so they rank sites based on how
                useful or relevant that site is. If your website is not
                optimized correctly, it will either be hard to find online or
                won’t show up.
              </p>
              <p className="sm_pre_text text-justify">
                Our Service ensures that you get traffic from your WordPress
                blog by increasing visibility through proper keywords, meta
                description, internal linking structure, and external links. We
                also provide services such as XML sitemaps that allow users who
                use assistive technology to better access your website.
              </p>
              <p className="sm_pre_text mt-4 text-justify">
                SEO service is important because it makes sure that your website
                appears as close to the top of a search engine as possible. This
                means more traffic for you and your business! It can help
                increase leads, conversions, and sales by making your website
                work better on the internet. Don’t miss out on this valuable
                opportunity –{" "}
                <Link
                  to="../contact"
                  className="text-[#054ada] mx-2 cursor-pointer"
                >
                  <FaExternalLinkAlt className="w-20px inline-block mr-1" />
                  contact us.
                </Link>
                . Today for a free
                <Link
                  to="../contact"
                  className="text-[#054ada] mx-2 cursor-pointer"
                >
                  <FaExternalLinkAlt className="w-20px inline-block mr-1" />
                  consultation
                </Link>
                !
              </p>
            </div>

            {/* right side */}
            <div className=" rounded">
              <img
                className="-mt-6 cover mx-auto"
                src="https://redoyislam.com/wp-content/uploads/2022/01/wordpress-seo-services-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-20 ">
        <div className="max-w-[1200px] lg:pt-20 mx-auto px-3">
          {/* ************************* Best Option For Your Business ********************* */}

          <div>
            <h2 className="md:sm_d_h2 my-10 md:medium_header sm_d_h2 text-center mx-auto lg:px-32">
              Why WordPress SEO Service Is The Best Option For Your Business
            </h2>
            <div className="grid md:grid-cols-2 mt-10 md:mt-0 lg:mt-20 gap-8 ">
              {/* right side */}
              <div className=" rounded">
                <img
                  className="-mt-6 cover mx-auto lg:w-[80%]"
                  src="https://redoyislam.com/wp-content/uploads/2022/01/wordpress-seo-service-1024x1024.webp"
                  alt=""
                />
              </div>

              <div className="">
                <p className="sm_pre_text mb-4 mt-8 text-justify">
                  WordPress SEO service is the best option for your business
                  because it is an all-inclusive package that provides various
                  services to help improve your website. Services include
                  keyword research, on-page optimization, social media
                  integration, XML sitemaps, and more!
                </p>
                <p className="sm_pre_text text-justify">
                  In addition to top-notch WordPress SEO, our team of experts is
                  available 24/7 to answer any questions or concerns you might
                  have. It’s our goal for you to be delighted with our services
                  and keep coming back.
                </p>
                <p className="sm_pre_text mt-4 text-justify">
                  We also offer a 100% money-back guarantee on our WordPress SEO
                  services. If you are not happy with our work, we will refund
                  your money – no questions asked! So what are you waiting for?
                  <Link
                    to="../contact"
                    className="text-[#054ada] mx-2 cursor-pointer"
                  >
                    <FaExternalLinkAlt className="w-20px inline-block mr-1" />
                    contact us.
                  </Link>
                  . Today for a free
                  <Link
                    to="../contact"
                    className="text-[#054ada] mx-2 cursor-pointer"
                  >
                    <FaExternalLinkAlt className="w-20px inline-block mr-1" />
                    consultation
                  </Link>
                  !
                </p>
              </div>
            </div>
          </div>

          {/* ************************* Care Of Your Website ********************* */}

          <div>
            <h4 className="sm_d_h2 text-center mt-20">
              The Benefits Of Choosing A Professional SEO Company To Take Care
              Of Your Website
            </h4>

            <p className="sm_pre_text mt-8 my-4">
              Professional SEO companies can help boost your website’s ranking
              and traffic. WordPress SEO service is an integral part of growing
              any business online, especially if you are starting out.
            </p>
            <p className="sm_pre_text  my-4">
              A professional WordPress SEO company will also advise how best to
              grow a WordPress blog or website and can work with you at all
              stages, including initial setup and strategy planning through
              ongoing management after launch!
            </p>
            <p className="sm_pre_text my-4">
              If you’re looking for a professional WordPress SEO company that
              will take care of all your website’s needs, then look no further!
              Contact us today for a free consultation. You can expect us
              anything about our services whenever you want.
            </p>
          </div>

          {/* ************************* Some Benefits Include ********************* */}

          <div>
            <h4 className="sm_d_h2 mt-10 text-center">
              Some Benefits Include:
            </h4>
            <ul className="pl-12 list-disc">
              <li className="sm_pre_text mt-8 my-4">
                Better rankings on SERPs (search engines) leads more potential
                customers to find their way back to our websites
              </li>
              <li className="sm_pre_text mt-8 my-4">
                More website traffic as WordPress SEO service targets the right
                audience with the right content
              </li>
              <li className="sm_pre_text mt-8 my-4">
                Improved brand awareness and reach as WordPress SEO Service can
                help get your site in front of new audiences
              </li>
            </ul>
          </div>

          {/* ************************* HOW WE WORK ********************* */}

          <div>
            <h2 className="sm_d_h2 md:sm_d_h2 my-10 md:medium_header text-center mx-auto mt-10 lg:px-32">
              HOW WE WORK
            </h2>
            <p className="sm_pre_text text-center mt-8 my-4">
              We follow the following steps when we take your WordPress SEO
              order
            </p>
          </div>

          <div>
            <div className="md:flex text-center  items-center my-5 lg:text-left bg-blue-600 p-4 rounded-2xl text-white hover:transform hover:scale-120 hover:animate-pulse">
              <div className="icon">
                <FaChartLine className="text-6xl text-center mx-auto lg:mx-3 lg:text-left " />
              </div>
              <div className="ml-4">
                <h4 className="my_h4">Audit and analysis</h4>
                <p className="sm_pre_text mt-4">
                  We'll tell you how to improve your site's ranking and
                  visibility in search engines. We know what works best, so you
                  don't have to worry about doing this alone!
                </p>
              </div>
            </div>
            <div className="md:flex text-center items-center my-5 lg:text-left bg-blue-600 p-4 rounded-2xl text-white hover:transform hover:scale-120 hover:animate-pulse">
              <div className="icon">
                <FaChartLine className="text-6xl text-center mx-auto lg:mx-3 lg:text-left " />
              </div>
              <div className="ml-4">
                <h4 className="my_h4">Make a plan</h4>
                <p className="sm_pre_text mt-4">
                  Our team will analyze your website and come up with a custom
                  SEO plan that matches your goals. We offer packages tailored
                  for different budgets, so contact us today!
                </p>
              </div>
            </div>
            <div className="md:flex text-center  items-center my-5 lg:text-left bg-blue-600 p-4 rounded-2xl text-white hover:transform hover:scale-120 hover:animate-pulse">
              <div className="icon">
                <FaChartLine className="text-6xl text-center mx-auto lg:mx-3 lg:text-left " />
              </div>
              <div className="ml-4">
                <h4 className="my_h4">
                  Technical Updates & On-Site Optimization
                </h4>
                <p className="sm_pre_text mt-4">
                  With a full team of WordPress developers, we can easily make
                  technical updates that will improve rankings. From changing
                  basics such as title tags and header tags to coding pages to
                  focus on featured Google results, our experts are able to
                  handle any development task! We'll also ensure your site's
                  internal linking structure gets improved along with SSL
                  certificates (if needed), ensuring visitors stay safe while
                  browsing through their favorite website
                </p>
              </div>
            </div>
            <div className="md:flex text-center  items-center my-5 lg:text-left bg-blue-600 p-4 rounded-2xl text-white hover:transform hover:scale-120 hover:animate-pulse">
              <div className="icon">
                <FaChartLine className="text-6xl text-center mx-auto lg:mx-3 lg:text-left " />
              </div>
              <div className="ml-4">
                <h4 className="my_h4">Ongoing content creation Plan</h4>
                <p className="sm_pre_text mt-4">
                  New content is essential for Google's ranking success. Our
                  team will develop a calendar of blog posts and articles to
                  keep you at the top of search engine rankings while also
                  building external links that bring traffic back from
                  industry-leading websites that trust your expertise.
                </p>
              </div>
            </div>
          </div>
          {/* ************************* One Should I Choose? ********************* */}

          <>
            <h4 className="sm_d_h2 lg:my_h2 mt-20 ">
              WordPress.Org Or WordPress.Com? Which One Should I Choose?
            </h4>

            <p className="sm_pre_text  my-4">
              WordPress.org is the finest platform for you if you want to
              control your website, from design to functionality entirely.
              WordPress.com is a good choice if you don’t want to worry about
              hosting, security, and other technical aspects of website
              maintenance. However, it comes with some restrictions on what you
              can do with your site.
            </p>
            <p className="sm_pre_text my-4">
              We recommend using WordPress.com because it’s simpler and doesn’t
              require any web hosting or domain registration fees if you’re
              starting out with WordPress. In the future, if you want more
              control, you can always migrate your site to WordPress.org.
            </p>
          </>

          {/* ************************* For SEO Than HTML ********************* */}

          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 gap-8 items-center my-14">
              {/* right side */}
              <div className="rounded">
                <img
                  className="-mt-6 cover mx-auto"
                  src="https://redoyislam.com/wp-content/uploads/2022/01/webdesign-1024x682.webp"
                  alt=""
                />
              </div>

              <div className="">
                <h2 className="sm_d_h2 my-10 md:medium_header text-center mx-auto">
                  Is WordPress Better For SEO Than HTML
                </h2>
                <p className="sm_pre_text my-4 text-justify">
                  The best SEO tool for WordPress is a matter of personal
                  preference. If you are new to all of this, I recommend picking
                  up the basics with something like Google’s Keyword Tool or
                  Ubersuggest. These two tools will help identify what people
                  are searching for and how competitive your keyword phrase is
                  about that search term. There are tons of plugins and themes
                  out there that offer these features. Just do some research!
                  There are also plenty of paid options, like SemRush and
                  Ahrefs, among others, but these two seem to be my favorites
                  from what I’ve used. I hope that helps!
                </p>
                <p className="sm_pre_text text-justify">
                  That said, some experts believe that sites built with pure
                  HTML are better optimized for Google and other search engines.
                  So if you’re an experienced web developer, you may want to
                  choose HTML over WordPress for your SEO needs. However, if
                  you’re not experienced in web development or coding, WordPress
                  is the way to go.
                </p>
              </div>
            </div>
          </>
          {/* ************************* SEO Tool For WordPress? ********************* */}

          <>
            <div className="grid md:grid-cols-2 mt-20  gap-8 items-center my-14">
              <div className="">
                <h2 className="sm_d_h2 my-10 md:medium_header text-center mx-auto">
                  What Is The Best SEO Tool For WordPress?
                </h2>
                <p className="sm_pre_text my-4 text-justify">
                  The best SEO tool for WordPress is a matter of personal
                  preference. If you are new to all of this, I recommend picking
                  up the basics with something like Google’s Keyword Tool or {" "}
                  <Link
                    className="text-blue-500 cursor-pointer"
                    target="_blank"
                    to="https://neilpatel.com/ubersuggest/"
                  >
                    Ubersuggest.
                  </Link>
                  These two tools will help identify what people are searching
                  for and how competitive your keyword phrase is about that
                  search term. There are tons of plugins and themes out there
                  that offer these features. Just do some research! There are
                  also plenty of paid options, like SemRush and{" "}
                  <Link
                    className="text-blue-500 cursor-pointer"
                    target="_blank"
                    to="https://neilpatel.com/ubersuggest/"
                  >
                    Ahrefs,
                  </Link>{" "}
                  among others, but these two seem to be my favorites from what
                  I’ve used. I hope that helps!
                </p>
              </div>

              {/* right side */}
              <div className=" rounded ">
                <img
                  className="-mt-6 cover mx-auto lg:w-[70%]"
                  src="https://redoyislam.com/wp-content/uploads/2022/01/seo-tools.webp"
                  alt=""
                />
              </div>
            </div>
          </>
        </div>
      </div>

      {/* ************************* Get In Touch ********************* */}
      <div className="py-10 mt-0 bg-[#e2ecf7] ">
        <div className="mx-auto w-full ">
          <h2 className="sm_d_h2 my-10 md:medium_header text-center mx-auto">
            Get In Touch
          </h2>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default WpSEOService;
