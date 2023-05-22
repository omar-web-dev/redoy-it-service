import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main/Main";
import Home from "../Pages/Home/Home";
import WpSEOService from "../Pages/Service/WpSEOService/WpSEOService";
import ThemeCustomization from "../Pages/Service/ThemeCustomization/ThemeCustomization";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Users from "../Dashboard/Users";
import Review from "../Dashboard/Review";
import AddReview from "../Dashboard/AddReview";
import Mail from "../Dashboard/Mail";
import AddPortfolio from "../Dashboard/AddPortfolio";
import GoogleAccountCheck from "../Components/EmailCeck";
import AboutUs from "../Pages/aboutUs/AboutUs";
import Popup from "../Components/Popup/Popup";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wordpress-seo-service/",
        element: <WpSEOService />,
      },
      {
        path: "/eduma-theme-customization",
        element: <ThemeCustomization />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/google-account-check",
        element: <GoogleAccountCheck/>,
      },
      {
        path: "/about-us",
        element: <AboutUs/>,
      },
      {
        path: "/popup",
        element: <Popup/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Users/>,
      },
      {
        path: "/dashboard/users",
        element: <Users/>,
      },
      {
        path: "/dashboard/all-review",
        element: <Review/>,
      },
      {
        path: "/dashboard/add-review",
        element: <AddReview/>,
      },
      {
        path: "/dashboard/mail",
        element: <Mail/>,
      },
      {
        path: "/dashboard/add-portfolio",
        element: <AddPortfolio/>,
      },
    ],
  },
]);

export default routes;
