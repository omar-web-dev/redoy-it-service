import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialIcons from "../Components/SocialIcons/SocialIcons";
import { API_URL } from "../Components/API_URL";
import { useEffect, useState } from "react";
import GoogleAccountCheck from "../Components/EmailCeck";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, setReviews] = useState([]);
  const [loadUser, setLoadUser] = useState(true)

  useEffect(() => {
    fetchReviews();
  }, [loadUser]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${API_URL}users`);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSubscriber = async (data) => {
    
    const emailList = [];
    for (let i = 0; i < users.length; i++) {
      const { email } = users[i];
      emailList.push(email);
    }

    const searchTerm = data.email;
    const found = emailList.includes(searchTerm);
    if (!found) {
      try {
        const response = await fetch(`${API_URL}users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result) {
          setLoadUser(false)
          alert(`Hi ${data.name}, Subscribe successfully `);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setLoadUser(true)
      alert(`Hi ${data.name}, this email already subscribe`);
    }
  };


  return (
    <footer className=" bg-[#054ada]">
      <div className="container mx-auto py-8 px-8 max-w-[1200px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
          {/* *** first section */}
          <div className="w-full  md:text-left">
            <img
              className="h-12  mb-4"
              src="https://redoyislam.com/wp-content/uploads/2021/12/redoy-1-150x59.png"
              alt="Logo"
            />
            <p className="text-gray-100">
              We’re a full-service SEO company that specializes in WordPress
              website design and Wordpress SEO. Our team has over seven years of
              experience with web design, word press optimization, and
              high-quality SEO. We believe in putting your satisfaction first at
              RedoyIslam. We will do everything possible for you by providing
              top notch workmanship on all projects undertaken while maintaining
              integrity across the entire engagement period, whether it is new
              clients coming back again or new business ventures starting up too
              .
            </p>
            <SocialIcons />
          </div>
          {/* *** meddle section */}
          <div className="w-full md:px-10 ">
            <h5 className="uppercase text-gray-100 font-bold mb-4">
              WordPress services
            </h5>
            <nav className="mb-4">
              <ul>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/wordpress-seo-service" target="_blank">
                    Wordpress seo service
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/eduma-theme-customization" target="_blank">
                    Education website design
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/portfolio" target="_blank">
                    Portfolio
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/contact" target="_blank">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* *** last section */}
          <form
            className="w-full text-gray-100"
            onSubmit={handleSubmit(handleSubscriber)}
          >
            <div>
              <p className="sm_pre_text">+880 1763-050964</p>
              <p className="sm_pre_text">info@redoyislam.com</p>
            </div>
            <div className="mb-4 mt-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors?.name && (
                <span className="text-red-200">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                {...register("email", { required: "Email is required" })}
              />
              {errors?.email && (
                <span className="text-red-200">{errors.email.message}</span>
              )}
            </div>
            <p className="px-2 py-2 bg-[#8e9172]  rounded-full transition duration-300 hover:bg-[#ffcc1d] transform hover:scale-40 ">
              <button className="w-full px-4 py-2 bg-[#ffcc1d] text-black font-bold rounded-full transition duration-300 hover:bg-[#ffcc1d] transform text-xl  hover:scale-80">
                SUBSCRIBE
              </button>
            </p>
          </form>
          <GoogleAccountCheck email={"qteam9035@gmail.com"}></GoogleAccountCheck>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
