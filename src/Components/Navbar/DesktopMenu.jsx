import { Link } from "react-router-dom";

function DesktopMenu() {
  
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}


      <ul className="flex gap-12 items-center">
        
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
            Home
          </Link>
        </li>

        <div className="group">
          <button className="flex items-center uppercase text-[15px] font-Inter font-bold">
            <span>Services</span>
            <svg
              className="h-8 w-8 transform group-hover:rotate-180 transition duration-150 ease-in-out"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414l.707-.707z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="rounded w-auto absolute z-10 bg-gray-100 invisible group-hover:visible uppercase text-[15px] font-Inter">
            <Link
              to="wordpress-seo-service"
              className="block rounded px-4 py-2 hover:bg-slate-300  text-black"
            >
              WordPress SEO Service
            </Link>
            <Link
              to="eduma-theme-customization"
              className="block rounded px-4 py-2 hover:bg-slate-300  text-black"
            >
              Eduma theme customization
            </Link>
          </div>
        </div>

        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/portfolio"}
          >
            Case Studies
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/about-us"}
          >
            About us
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
        
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
