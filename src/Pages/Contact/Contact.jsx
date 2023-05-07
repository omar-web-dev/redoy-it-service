const Contact = () => {
  return (
    <div>
      {/* ************************* Header ********************* */}

      <div>
        <div className="py-52 pb-32 bg-[#054ada]">
          <h1 className="text-center header">Contact</h1>
        </div>
        <img
          className="w-full"
          src="https://i.ibb.co/tBKp0JK/Screenshot-1.png"
          alt="Screenshot-1"
          border="0"
        />
      </div>
      {/* ************************* Get In Touch ********************* */}
      <div className="py-20 ">
        <form className=" text-gray-100 w-full md:w-1/2 mx-auto">
          <div className="mb-4 mt-2">
            <input
              className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 bg-[#ffcc1d] text-white font-bold rounded transition duration-300 hover:bg-[#ffcc1d] transform text-xl hover:scale-80">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
