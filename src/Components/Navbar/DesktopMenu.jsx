import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

function DesktopMenu() {
  // console.log(navItems);
  // const { navItems } = navItems;

  // const navLinks = navItems.map((item) => {
  //   if (Array.isArray(item)) {
  //     const subMenu = item.map(
  //       (subItem) => `<Link to="${subItem.link}">${subItem.name}</Link>`
  //     );
  //     return `<li class="dropdown">${subMenu}</li>`;
  //   } else {
  //     return `<li><Link to="${item.link}">${item.name}</Link></li>`;
  //   }
  // });
  // // Output the result as a list of links
  // const navList = `<ul>${navLinks}</ul>`;
  // console.log(navList)
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
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
        <p className="px-2 py-2 bg-[#8e9172]  rounded-full  ">
          <button className="flex justify-center items-center px-4 py-2 bg-[#ffcc1d] text-black font-bold rounded-full">
            <FaPhoneVolume />
            LETS TALK
          </button>
        </p>
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
