import Navbar from "../components/Navbar";
import { CgCalendarDates } from "react-icons/cg";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

export default function About({ isDarkMode, toggleColorMode }) {
  const experiences = [
    {
      id: 1,
      title: "",
      description:
        "nill",
      date: "",
    },
    {
      id: 2,
      title: "",
      description:
        "",
      location: "Ogbomoso",
      date: "",
    },
  ];

  return (
    <div>
      <div className="my-7 flex flex-col justify-center items-center">
        {experiences.map((experience) => (
          <Experience experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
}

function Experience({ experience }) {
  return (
    <div className="mb-8 text-white w-full md:w-full lg:w-8/12 text-center p-2">
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center text-left mb-6 lg:my-2 text-white gap-3 lg:gap-24">
        <h3 className="text-18 lg:text-[21.74px] font-bold ">
          {experience.title}
        </h3>
        <h3 className="text-left text-[14.49px] text-[#8491A0]">
          {experience.date}
        </h3>
      </div>
      <p className="my-2 text-justify text-[13px] leading-5 font-light font-sans">
        {experience.description}
      </p>
      {/* <div className="flex justify-between items-center gap-36 text-white">
          <h3 className="text-18 lg:text-[21.74px] font-bold">
            {experience.title}
          </h3>
          <h3>{experience.date}</h3>
        </div>
        <p className="">{experience.description}</p> */}
    </div>
  );
}
