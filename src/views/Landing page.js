import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import SkillItem from "../components/Skills";
import SoftwareDev from "./Software dev.svg";
import Entreprenuer from "./entrepreneur.svg";
import Website from "./Website.svg";
import Linkedin from "./LinkedIn App icon.svg";
import Github from "./Github icon.svg";
import Presentation from "./Presentation.svg";

export default function Landing() {
  const handleClick = (e) => {
    try {
      window.open(
        "https://uat-erya.mo-but.com/",
        "_blank",
        "noopener, noreferrer"
      );
    } catch (error) {
      console.error("Error opening new window", error);
    }
  };

  const handleClick2 = (e) => {
    try {
      window.open(
        "https://www.canva.com/design/DAGMNvwo4BA/MctSbFOJ5hmvCElWVPd6UA/view?utm_content=DAGMNvwo4BA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        "_blank",
        "noopener noreferrer"
      );
    } catch (error) {
      console.error("Error opening new window", error);
    }
  };
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/eb/93/7b/eb937bbd3f14b82f31f82498efd1db63.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto mt-16">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
                <div id="about-me" className="pr-12">
                  <h1 className="ml-10 text-white flex justify-center font-semibold text-5xl mb-[40px] lg:whitespace-nowrap">
                    👋 Hi I'm Shivansh Anand
                  </h1>
                  <h1 className="mb-10 flex flex-col ml-16 text-white ">
                    Currently a sophomore computer engineering + AI student at
                    The Hong Kong University of Science and Technology.
                    <br />
                    <br />
                    Curious and intrigued by
                    <strong className="rounded-full w-fit mx-auto bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                      software development, AI and entrepreneurship
                    </strong>
                    <br />
                    Also an avid fan of 🏀 , 🧗 , 🏋️ and video editing
                  </h1>
                  <div className="flex flex-row justify-center ml-8">
                    <a
                      href="https://www.linkedin.com/in/shivansh-anand-09746423b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Linkedin}
                        className="w-[64px] h-[64px] ml-10"
                        alt="Linkedin"
                      />
                    </a>
                    <a
                      href="https://github.com/shivynand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Github}
                        className="w-[64px] h-[64px] ml-[50px]"
                        alt="Github"
                      />
                    </a>
                  </div>
                  <h2 className="mt-[70px] ml-16 justify-center font-bold text-[40px] sm:text-[60px] md:text-[90px] bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 text-transparent">
                    Aspiring
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 bg-black -mt-24">
          <div className="container mx-auto">
            <div className="flex flex-wrap mx-auto">
              <div className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-blue-600 to-blue-800 w-full mb-6 lg:mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <img src={SoftwareDev} alt="Software dev" />
                    </div>
                    <h6 className="text-xl font-bold text-blue-400">
                      Software Engineer
                    </h6>
                    <p className="mt-2 mb-4 font-light text-blue-400">
                      Aiming to be a fullstack engineer deploying tech solutions
                      that CHANGE THE WORLD.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4 text-center md:mt-6 lg:mt-12">
                <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-red-600 to-red-800 w-full shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <img src={Entreprenuer} alt="Entrepreneur"></img>
                    </div>
                    <h6 className="text-xl font-bold text-red-400">
                      Entrepreneur
                    </h6>
                    <p className="mt-2 mb-4 font-light text-red-400">
                      Worked on building an AI marketing startup, now working on
                      a 🐶 ecommerce store
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="pt-6 w-full md:w-4/12 px-4 text-center lg:mt-4">
                <div className="relative flex flex-col min-w-0 break-words bg-green-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                        <img src={Creator} alt="Creator"></img>
                    </div>
                    <h6 className="text-xl font-bold">Creator</h6>
                    <p className="mt-2 mb-4 font-light text-black">
                        Enthusiastic about building an online presence, to share my knowledge and document my journey
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            <div
              id="projects"
              className="flex justify-center w-full font-bold text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 pb-10"
            >
              PROJECTS
            </div>
            <div className="font-semibold mb-10 flex flex-wrap w-full text-center text-white">
              Showcasing my experiences with different projects related to
              software engineering and entrepreneurship, to demonstrate my
              passion and interest for these 2 fields. Take a look 👀 at some of
              my work, to understand my skillset, problem-solving abilites, and
              the kinds of technical solutions I can deliver.
            </div>
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 mx-auto rounded-lg h-full w-full">
              <h1 className="flex flex-row justify-center items-center p-4 text-[40px] font-semibold text-yellow-400">
                <div className="flex text-center">
                  🤖 AI Chinese Learning Website for University Students
                </div>
              </h1>
              <h2 className="m-3 text-[30px] flex-wrap text-center text-yellow-400 font-extrabold">
                June 2024 - July 2024
              </h2>
              <h3 className="mt-10 font-serif font-thin text-[24px] text-center text-yellow-400">
                Skills: React.js, Tailwind CSS, Typescript, Creating &
                Implementing APIs, Drizzle, Databases, Git, Version Control
              </h3>
              <p className="p-10 text-center text-white">
                During my time at an internship, I helped in constructing a
                responsive, React based website that aids university students
                learning for chinese courses. Having gone into this internship
                with barely any technical skills, I learnt a lot from this
                project, which I am using to construct this landing page! I
                gained some fullstack developer experience in the frontend and
                backend.
              </p>
              <div className="p-10 -mt-12 text-[20px] text-center font-bold text-lg text-white">
                My contributions:
              </div>
              <div className="flex flex-wrap text-[19px] text-center p-10 -mt-16 text-white">
                • Developed responsive UI for 2 pages of the website using
                Tailwind CSS ( 文章分析 & 關於我們)
                <br />
                <br />
                • Implemented APIs from backend to frontend using Nest JS and
                Swagger
                <br />
                <br />
                • Made and called an API (controller file in the backend) using
                TypeScript and NestJS for the 意念醞釀 page
                <br />
                <br />
                • Learned how to use Github for collaborative software projects
                (Version Control, Pull Requests, Merging, Resolving Conflicts,
                Branches)
                <br />
                <br />
                • Implemented schemas, migrations and managed to store data in
                drizzle database
                <br />
                <br />• Fixed countless UI and backend bugs, improved my
                debugging skills and gained more understanding of the software
                development process
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="flex items-center p-2 rounded-full bg-white mt-[20px] hover:text-black hover:bg-yellow-400 mb-3"
                  onClick={handleClick}
                >
                  <span className="w-[5vw] flex-shrink-0 hidden md:block">
                    <img
                      src={Website}
                      alt="Website"
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <div className="font-semibold flex-grow text-center md:p-4">
                    Website
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 relative">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-red-800 to-red-600 mx-auto rounded-lg h-full w-full">
              <h1 className="flex flex-row justify-center items-center p-4 text-[40px] font-semibold text-yellow-400">
                <div className="flex text-center">
                  Cofluence - AI Influencer Marketing Startup
                </div>
              </h1>
              <h2 className="m-3 text-[30px] flex-wrap text-center text-yellow-400 font-extrabold">
                January 2024 - May 2024
              </h2>
              <h3 className="mt-10 p-2 font-serif font-thin text-[25px] text-center text-yellow-400">
                Skills: UX design (userflow), Pitching & Presenting, Recruiting,
                Market and Competitor Analysis
              </h3>
              <p className="p-10 text-center text-white">
                I was part of a 5 man team helping build an AI influencer
                marketing website, that leverages AI to connect brands with the
                correct microinfluencers that match their brand image. Overall,
                this was a rich experience to develop my business skills,
                complementing my analytical and technical background, which I
                will definitely find useful in my future entrepreneurial
                endeavours
              </p>
              <div className="p-10 -mt-12 text-center text-[20px] font-bold text-lg text-white">
                My contributions:
              </div>
              <div className="flex flex-wrap text-center justify-center text-[18px] p-10 -mt-16 text-white">
                • Developed my sales and communication skills through pitching
                in startup competitions and talking to VCs.
                <br />
                <br />
                • Recruited a PHD machine learning student studying at HKUST,
                with his own successful biotech startup
                <br />
                <br />
                • Was part of the pitch that helped recieve a HKD 10,000 funding
                offer from HKUST entrepreneurship center
                <br />
                <br />
                • Improved my business skills by carrying out market and
                competitor analysis of the influencer marketing industry
                <br />
                <br />• Helped in designing the user flow of our website using
                Miro
              </div>
              <div className="flex justify-center items-center mb-5">
                <button
                  className="flex items-center p-2 rounded-full bg-white mt-[20px] hover:text-black hover:bg-yellow-400 mb-3"
                  onClick={handleClick2}
                >
                  <span className="w-[5vw] flex-shrink-0 hidden md:block">
                    <img
                      src={Presentation}
                      alt="Presentation"
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <div className="font-semibold flex-grow text-center md:p-4">
                    Demo
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div id="skills" className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-[50px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400 ">
                  Skills 🛠️
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  As a aspiring software engineer and entrepreneur , learning
                  and building up my skillset is essential for success and is
                  important to me.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 mb-12 sm:mb-none justify-center">
              <SkillItem />
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
