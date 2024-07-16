import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useTypewriter from "react-typewriter-hook";
import Navbar from "../components/Navbar";
import TechStack from "../components/Technologies";
import Project from "../components/Project";
import About from "./About";

import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [magicName, setMagicName] = useState("make Design");
  const name = useTypewriter(magicName);

  useEffect(() => {
    const magicNames = ["make Design", "Write"];
    let index = 0;
    const intervalId = setInterval(() => {
      index = index > 2 ? 0 : ++index;
      setMagicName(magicNames[index]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black h-auto">
      <Navbar />
      <div>
        <div className="lg:container mx-auto">
          <div className="p-8 md:p-14 lg:p-24 flex justify-center items-center flex-col text-center text-white">
            <div>
              <motion.div
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "50%",
                  padding: "4px",
                  background:
                    "linear-gradient(270deg, #FF8660, #C548A9, #8000FF)",
                  backgroundSize: "200% 600%",
                }}
                className="flex items-center justify-center text-white"
              >
                <img
                  className="w-full rounded-full"
                  // src="./assets/john.jpg"
                  alt=""
                />
              </motion.div>
            </div>

            {/*  */}
            <div className="flex flex-col justify-center items-center mt-10">
              <h1 className="text-36 md:text-48  text-center font-bold">
                I do code
              </h1>
              <h1 className="text-36 md:text-48 text-center  font-bold">
                and
                <span
                  className="bg-gradient-to-br from-pitch via-pitch to-purple text-transparent
      bg-clip-text"
                >
                  {" "}
                  {name}
                </span>
              </h1>
              <p className="text-center text-gray mt-8 w-full md:w-full lg:w-3/5">
           
              </p>
            <div>
            <h1 className="text-36 md:text-48  text-center font-bold">
            Who I am
              </h1>
            I’m a software developer, cyber security Enthusiast,SecOps and Multi-Cloud Enthusiast, nodejs and Python Cody. I’m currently doing my B.tech in cyber security, and a proffesional degress in cyber security from SQI College of ICT while working on other projects.
            I am always been passionate about Cybersecurity, Multi-Cloud, and am also a passionate researcher. When I’m not developing and building things, you can find me on online learning. But most of my days are spent working on projects, coding on Nodejs or Python, Studying or mediating.
            </div>
              <button className="font-semibold bg-black border border-white px-10 py-4 rounded-full mt-10 hover:bg-white hover:text-black transition-all duration-100">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="lg:container mx-auto">
        <div className="flex flex-col justify-center items-center mt-10 p-6 lg:p-2">
          <div className="">
            <h1 className="text-24 font-semibold text-gray my-2">
              EXPERIENCE WITH
            </h1>
          </div>
          <TechStack />
        </div>
      </div>

      {/* Projects */}
      <div className="lg:container mx-auto">
        <div className="flex flex-col justify-center items-center mt-10 p-2">
          <h1
            className="text-36  font-bold bg-gradient-to-br from-[#FF8660] via-[#FF8660] to-[#D5491D] text-transparent
      bg-clip-text uppercase my"
          >
            Projects
          </h1>
          <Project />
        </div>
      </div>

      {/* Expreience */}
      <div className="lg:container mx-auto">
        <div className="flex flex-col justify-center items-center  my-24 p-2">
          <h1
            className="text-36  font-bold bg-gradient-to-br from-[#5BADFF] via-[#1373D1] to-[#1373D1] text-transparent
      bg-clip-text uppercase my"
          >
            Experience
          </h1>
          <div
            className="
          "
          >
            <About />
          </div>
        </div>
      </div>

      <div className="bg-[#191919] text-white h-1/2">
        <div className="md:container mx-auto">
          <div className="py-14 w-full lg:w-8/12 p-3">
            <h1 className="text-[23.53px] font-bold my-4">Contact</h1>
            <p className="w-full lg:w-4/6leading ">
              Seasoned backend Developer with over 3 years of hands-on
              experience in designing and implementing robust, scalable, and
              innovative web solutions. Adept at leveraging a comprehensive
              skill set encompassing front-end and back-end technologies{" "}
            </p>

            <div>
              <h1 className="text-16 my-6 font-medium text-white flex items-center gap-3">
                <MdOutlineEmail size={20} /> akin10400@gmail.com
              </h1>
            </div>

            <div className="flex gap-4">
              <Link to="https://github.com/cy3erdr4g0n">
                <FaGithub size={20} />
              </Link>
              <Link to="https://x.com/respectgraceman">
                <AiFillTwitterCircle size={20} />
              </Link>
              <Link to="https://linkedin.com/in/akintola-john-1801a0238">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
