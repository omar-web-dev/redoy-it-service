import ContactForm from "../../Components/ContactForm";


const Contact = () => {

  
  return (
    <div>
      {/* ************************* Header ********************* */}

      <div>
        <div className="py-52 h-32 pb-32 bg-[#054ada]">
          <h1 className="text-center sm_d_h1 md:header">Contact</h1>
        </div>
        <img
          className="w-full h-20 -mt-1"
          src="https://i.ibb.co/tBKp0JK/Screenshot-1.png"
          alt="Screenshot-1"
          border="0"
        />
      </div>
      {/* ************************* Get In Touch ********************* */}
      <div className="mb-4 lg:my-32">
      <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;
