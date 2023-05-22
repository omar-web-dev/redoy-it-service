
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Analyze = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mcsam4r",
        "template_hz06vor",
        e.target,
        "9EZQ9b4vbqTAvkxEU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        () => {
          setError(true);
        }
      );
  }
  const copyEmail = () => {
    const emailElement = document.getElementById("email");
    emailElement.select();
    document.execCommand("copy");
    alert("Email copied to clipboard!");
  };

  console.log(error);
  return (
    <div className="px-3">
      {error ? (
        <div className="flex flex-col items-center justify-center h-[50vh] ">
          <p className="text-xl text-red-500 mb-4">
            Email {"couldn't"} be sent. Please try other ways.
          </p>
          <div className="bg-gray-100 rounded p-4 mb-4">
            <input
              id="email"
              type="text"
              readOnly
              value="tanzidaltanzo@gmail.com"
              className="outline-0 rounded px-2 py-1 mb-2"
            />
            <button
              onClick={copyEmail}
              className="bg-blue-100 text-blue-600 btn-sm  px-4  rounded"
            >
              Copy Email
            </button>
          </div>
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" text-gray-100 w-full md:w-5/6 mx-auto"
        >
          <div className="mb-4 mt-2">
            <input
              className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="user_name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 mt-2">
            <input
              className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="website"
              placeholder="Enter your Website Link "
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="user_email"
              placeholder="Enter your email address"
            />
          </div>
          <button
            type="submit"
            value="Analyze"
            className="w-full px-4 py-2 bg-[#00b894] text-white font-bold rounded transition duration-300 hover:bg-orange-500 transform text-xl hover:scale-80"
          >
            Analyze
          </button>
        </form>
      )}
    </div>
  );
};

export default Analyze;
