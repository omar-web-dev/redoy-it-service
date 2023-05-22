import { useEffect, useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DesktopSidebar from "./DesktopSidebar";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { name: "Home", link: "/" },
    [
      { name: "WordPress SEO Service", link: "wordpress-seo-service" },
      { name: "Eduma theme customization", link: "eduma-theme-customization" },
    ],
    { name: "Case Studies", Link: "portfolio" },
    { name: "Contact", link: "contact" },
    { name: "lets Talk", link: "contact" },
  ];

  

  return (
    <>
      <div className="">
        <nav
          className={`bg-[#054ada] z-50 w-full px-3 lg:relative ${
            scrollPosition > 0 ? "navbar-bg" : "primary-navbar"
          }`}
        >
          <div className="max-w-[1200px] font-Cuprum py-3  text-white mx-auto">
            {sidebar && <DesktopSidebar setSidebar={setSidebar} />}
            <div className="flex justify-between items-center">
              {/* Logo Here */}
              <div className="flex items-center">
                <img
                className="w-36"
                  src="https://i.ibb.co/fvTLwxT/logo.png"
                  alt="logo"
                />
              </div>

              <div>
                {/* Desktop Menu */}
                <DesktopMenu
                  navItems={navItems}
                  scrollPosition={scrollPosition}
                />

                {/* MobileMenu */}
                <div className="transition-transform duration-1000 ease-in">
                  <MobileMenu navItems={navItems} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;