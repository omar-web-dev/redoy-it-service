import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className="flex gap-2 mt-4">
      <Link
        to="https://web.facebook.com/redoy304816/"
        target="_blank"
        className="inline-block text-center text-blue-500 hover:bg-gray-300 bg-gray-50 p-3 rounded-full"
      >
        <span className="sr-only">Facebook</span>
        <FaFacebookF className="h-3 w-3"/>
      </Link>
      <Link
        to="https://twitter.com/Redoyweb"
        target="_blank"
        className=" inline-block text-center text-blue-500 hover:bg-gray-300 bg-gray-50 p-3 rounded-full"
      >
        <span className="sr-only">Twitter</span>
        <FaTwitter className="h-3 w-3"/>
      </Link>
      <Link
        to="https://www.instagram.com/redoyweb/"
        target="_blank"
        className="inline-block text-center text-blue-500 hover:bg-gray-300 bg-gray-50 p-3 rounded-full"
      >
        <span className="sr-only">Instagram</span>
        <FaInstagram className="h-3 w-3"/>
      </Link>
      <Link
        to="https://www.linkedin.com/in/redoy-islam-3bb403175/"
        target="_blank"
        className="inline-block text-center text-blue-500 hover:bg-gray-300 bg-gray-50 p-3 rounded-full"
      >
        <span className="sr-only">LinkedIn</span>
        <FaLinkedin className="h-3 w-3"/>
      </Link>
    </div>
  );
};

export default SocialIcons;
