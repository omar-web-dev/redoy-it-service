const SEOService = () => {
  const serviceContent = [
    {
      id: 1,
      title: "wordpress speed optimization service",
      description:
        "You should Choose the right hosting provider to achieve an attractive, fast-loading website. Hosting is a big factor in how quickly your site is loaded. Take advantage of caching whenever possible, as this can help website visitors see a faster loading time. Cdn improves site speed by caching static resources on a content delivery network. This reduces the load time of your website and increases the speed of your visitors. We will always be ready to help you optimize your site for speed 99%.",
    },
    {
      id: 2,
      title: "Website Maintenance",
      description:
        "Your website is the most significant investment you’ve made. That’s why a website should take care of it with professional help. It’s crucial to keep your website functioning correctly and respond to your customers’ needs. Over time, most websites go through some maintenance. Therefore, it’s essential to have a maintenance team that can keep your site updated and working smoothly so that you don’t experience any downtime. we will 24/7 help keep your website safe from hackers and malware",
    },
    {
      id: 3,
      title: "WordPress Custom Website Design",
      description:
        "If you want to take your business, blog, or personal website to the next level, custom WordPress design is a great choice. WordPress custom website design can help you get your brand out there with all your customers’ features and more.",
    },
    {
      id: 4,
      title: "ECommerce Web Design",
      description:
        "Suppose you want to use WordPress for your eCommerce website.wordpress is the right decision for you. There are many options With WordPress as your e-commerce platform, and you can choose from various ECommerce themes. A developer will work with you to ensure that your website is coded correctly, responsive and SEO-optimized for search engines. In addition, we will create a user-friendly and addition to enhance your website’s functionality.",
    },
    {
      id: 5,
      title: "Lms website",
      description:
        "LMS stands for Learning Management System. It is a web-based tool that helps teachers and students to work together on shared projects, assignments, quizzes, and tests. Large organizations use LMS to manage their courses and small businesses. You can sell your course using LMS like Udemy. we are creating a world-class eye-catching online course based learning membership wordpress website using eduma theme and elementor builder",
    },
    {
      id: 6,
      title: "clone any wordpress website",
      description:
        "We can convert or clone any WordPress Website/Web page/Landing Page using WordPress Elementor Pro. WordPress Elementor Pro will convert any wordpress website into a responsive, mobile-friendly, and customizable theme. It has a robust drag & drop editor that makes it easy to customize your WordPress website. The WordPress Elementor Pro is the best plugin for creating custom themes.",
    },
  ];
  return (
    <div className="mt-7 md:mt-24 mb-20 px-3">
      <h2 className="medium_header mb-10">Our Affordable Web Design</h2>
      <p className="sm_pre_text text-center ">
        Web design has become an important part of the way people interact with
        one another online. With our affordable web designs, you can build a
        strong brand for yourself and attract new customers!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-3 gap-8 mt-10">
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
