import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { API_URL } from "../../Components/API_URL";
// import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {

  const [portfolioContent, setPortfolioContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}portfolio`);
        const data = await response.json();
        setPortfolioContent(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
