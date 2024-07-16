import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Projects() {
  const projects = [
    {
      id: 1,
      img: "./assets/ecommerce.jpg",
      title: "Funiro Furniture",
      github: "",
      live: "",
    },
    {
      id: 2,
      img: "./assets/todo_app.png",
      title: "Todo App",
      github: "",
      live: "",
    }
  ];
  return (
    <div className="p-3">
      <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-10 justify-between place-content-center place-items-center">
        {projects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

function Card({ project }) {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <div className="w-full md:w-[400px] lg:w-[400px] h-[301px] bg-[#2A2A2A]  rounded-lg mt-4">
          <img
            src={project.img}
            className="w-full rounded-tl-lg rounded-tr-lg object-fill object-center"
            alt={project.title}
          />
          <div className="p-2 flex items-center justify-between">
            <div>
              <Link className="text-gray" to={project.live}>
                CLICK HERE TO VISIT
              </Link>
              <h1 className="text-24 font-bold mb-3 uppercase text-white">
                {project.title}
              </h1>
            </div>
            <div>
              <Link className="text-white" to={project.github}>
                <MdOutlineArrowOutward size={30} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
