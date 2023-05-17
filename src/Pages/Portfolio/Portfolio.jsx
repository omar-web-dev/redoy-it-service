import PortfolioCard from "./PortfolioCard";
// import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const portfolioContent = [
    {
      id: 1,
      name: "crackastory",
      project_URL: "https://crackastory.com/",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/04/crackastory-330x240.webp",
      completedDate: "April 11, 2022",
      categories: " Education",
      tools: "wordpress",
    },
    {
      id: 2,
      name: "Bewomanest",
      project_URL: "https://bewomanest.com/",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/04/bewomanest-330x240.webp",
      completedDate: "May 25, 2022",
      categories: " Educational",
      tools: "Wordpress",
    },
    {
      id: 3,
      name: "Groupdynamix",
      project_URL: "https://groupdynamix.com/",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/04/Team-Building-Activities-in-Dallas-TX-Group-Dynamix.webp",
      completedDate: "April 17, 2022",
      categories: " Educational",
      tools: "Wordpress",
    },
    {
      id: 4,
      name: "Lessons on the Go",
      project_URL: "https://www.ensembleschools.com/",
      completedDate: "April 11, 2022",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/05/screencapture-lessonsonthego-2018-09-28-08_13_06-330x240-1.webp",
      categories: " Educational",
      tools: "Wordpress",
    },
    {
      id: 5,
      name: "Americanrad",
      project_URL: "https://www.americanrad.com/",
      completedDate: "November 23, 2021 ",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/05/Bakke-New-330x240-1.webp",
      categories: " Doctor",
      tools: "Wordpress",
    },
    {
      id: 6,
      name: "Bgu University",
      project_URL: "https://www.bgu.edu/",
      completedDate: "October 05, 2021",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/05/Bakke-New-330x240-1.png",
      categories: " Educational",
      tools: "Wordpress",
    },
    {
      id: 7,
      name: "Austin College",
      project_URL: "http://www.austincollege.edu/",
      completedDate: "October 05, 2020",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/05/Austin-College-New-330x240-1.png",
      categories: " Educational",
      tools: "Wordpress",
    },
    {
      id: 8,
      name: "techworld400",
      project_URL: "https://techworld400.net/",
      completedDate: "April 19, 2022",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/04/skybridgerenewables.webp",
      categories: " Business",
      tools: "Wordpress",
    },
    {
      id: 9,
      name: "Comprehend",
      project_URL: "https://www.comprehend.org/",
      completedDate: "January 11, 2022",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/04/screencapture-comprehend-org-2018-05-10-15_13_32-330x240-1.png",
      categories: "Business",
      tools: "Wordpress",
    },
    {
      id: 10,
      name: "Pantegodental",
      project_URL: "https://www.pantegodental.com/  ",
      completedDate: "May 25, 2022",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/05/crefcoa-thumbnail@2x_new-330x240-1.png",
      categories: "  Doctor",
      tools: "Wordpress",
    },
    {
      id: 11,
      name: "Americanrad",
      project_URL: "https://www.americanrad.com/",
      completedDate: "November 23, 2021",
      image:
        "https://redoyislam.com/wp-content/uploads/2022/05/pantego-thumbnail@2x_new-330x240-1.png",
      categories: "  Doctor",
      tools: "Wordpress",
    },
  ];
  return (
    <div>
      {/* ************************* Header ********************* */}
      <div>
        <div className="py-52 pb-32 bg-[#054ada]">
          <h1 className="text-center sm_d_h1 md:header">Case Studies</h1>
          <p className="sm_pre_text text-center text-white underline mt-4">
            learn about our WordPress SEO service
          </p>
        </div>
        <img
          className="w-full -mt-1 h-20"
          src="https://i.ibb.co/tBKp0JK/Screenshot-1.png"
          alt="Screenshot-1"
          border="0"
        />
      </div>
      <div className="max-w-[1200px] mx-auto mt-20 px-3 mb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {portfolioContent.map((item, i) => (
            <PortfolioCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
