import { useState } from "react";
import { FaSearchPlus, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PortfolioCard = ({ item }) => {
  const { name, project_URL, image, completedDate, categories, tools } = item;
  const [isHovering, setIsHovering] = useState(false);
  // const [isBtnHovering, setBtnIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="overflow-hidden shadow-lg ">
      <div className="relative">
        <div className="relative h-60 overflow-hidden">
          <div className="bg-[#054ada] opacity-100">
            <img
              className={`w-full h-full overflow-hidden hover:opacity-50 transition duration-1000 ease-out ${
                isHovering ? "scale-125" : ""
              }`}
              src={image}
              alt="Card Image"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          {isHovering && (
            <>
              <a href={project_URL} target="_blank">
                <button
                  onMouseEnter={handleMouseEnter}
                  className={`absolute top-1/2 left-[60%] hover:text-blue-500 -translate-x-1/2 -translate-y-1/2 text-white `}
                >
                  <FaExternalLinkAlt className="text-xl" />
                </button>
              </a>
              <button
                onMouseEnter={handleMouseEnter}
                className={`absolute top-1/2 left-[40%] hover:text-blue-500 -translate-x-1/2 -translate-y-1/2 text-white`}
              >
                <FaSearchPlus className="text-2xl" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="px-6 py-4 bg-[#e2ecf7]">
        <div className="  flex  mb-2 font-bold">
          <Link to={project_URL} className="hover:text-yellow-500">{name}</Link>
        </div>
        <div className="  flex  mb-2">
          <p className="font-bold ">Project URL : </p>
          <Link to={project_URL} className="ml-2 text-blue-500 hover:text-yellow-500">{project_URL}</Link>
        </div>
        <div className=" flex  mb-2">
          <p className="font-bold ">Completed Date :</p>
          <p className="ml-2">{completedDate}</p>
        </div>
        <div className="  flex  mb-2">
          <p className="font-bold ">Categories :</p>
          <p className="ml-2">{categories}</p>
        </div>
        <div className="  flex  mb-2">
          <p className="font-bold ">Tools :</p>
          <p className="ml-2">{tools}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
