import React, { useState } from "react";
import smoothScroll from "../utils/Scroll";
import Email from "./Email.svg";
import Phone from "./Phone.svg";
import Linkedin from "./Linkedin.svg";
import Github from "./Github SVGRepo icon.svg";

const ContactButton = ({ icon, alt, onClick, textColor }) => (
    <button
      className={`bg-white ${textColor} shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3`}
      type="button"
      onClick={onClick}
    >
      <img src={icon} alt={alt} />
    </button>
  );


const PhonePopup = ({ phoneNumber, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4">Contact Number</h2>
        <p className="mb-4">{phoneNumber}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const phoneNumber = "+852 6155 4789";

  const handleClick = (url) => (e) => {
    try {
      window.open(url, "_blank", "noopener, noreferrer");
    } catch (error) {
      console.error("Error opening new window", error);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const contactData = [
    {
      icon: Email,
      alt: "Email",
      onClick: handleClick("mailto:shivanshanand2@gmail.com"),
      textColor: "text-blue-400"
    },
    {
      icon: Phone,
      alt: "Phone",
      onClick: togglePopup,
      textColor: "text-blue-600"
    },
    {
      icon: Linkedin,
      alt: "Linkedin",
      onClick: handleClick("https://www.linkedin.com/in/shivansh-anand-09746423b/"),
      textColor: "text-pink-400"
    },
    {
      icon: Github,
      alt: "Github",
      onClick: handleClick("https://github.com/shivynand"),
      textColor: "text-gray-900"
    }
  ];

  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      {/* <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Feel free to reach out!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">Contacts:</h5>
            <div className="mt-6">
              {contactData.map((contact, index) => (
                <ContactButton
                  key={index}
                  icon={contact.icon}
                  alt={contact.alt}
                  onClick={contact.onClick}
                  textColor={contact.textColor}
                />
              ))}
              {/* <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                onClick={handleClick("mailto:shivanshanand2@gmail.com")}
              >
                <img src={Email} alt="Email" />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                onClick={togglePopup}
              >
                <img src={Phone} alt="Phone" />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                onClick={handleClick("https://www.linkedin.com/in/shivansh-anand-09746423b/")}
                
              >
                <img src={Linkedin} alt="Linkedin" />
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                onClick={handleClick("https://github.com/shivynand")}
              >
                <img src={Github} alt="Github" />
              </button> */}
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-black text-sm font-semibold mb-2">
                  Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#about-me"
                      onClick={smoothScroll}
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#projects"
                      onClick={smoothScroll}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#skills"
                      onClick={smoothScroll}
                    >
                      Skills
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Shivansh Anand{" "}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <PhonePopup phoneNumber={phoneNumber} onClose={togglePopup} />
      )}
    </footer>
  );
}
