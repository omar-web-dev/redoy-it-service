import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Pages/Footer";


const Main = () => {
    return (
        <div className="max-w-1200px">
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;