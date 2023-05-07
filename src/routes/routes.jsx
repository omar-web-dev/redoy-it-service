import { createBrowserRouter } from "react-router-dom"
import Main from "../main/Main"
import Home from "../Pages/Home/Home"
import WpSEOService from "../Pages/Service/WpSEOService/WpSEOService"
import ThemeCustomization from "../Pages/Service/ThemeCustomization/ThemeCustomization"
import Contact from "../Pages/Contact/Contact"
import Portfolio from "../Pages/Portfolio/Portfolio"



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/wordpress-seo-service/",
                element: <WpSEOService />
            },
            {
                path: "/eduma-theme-customization",
                element: <ThemeCustomization />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            


        ],
        

    }
])


export default routes