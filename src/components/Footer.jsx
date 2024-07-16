import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="">
      <hr />
      <div className="flex flex-col  md:flex-row justify-between item-start md:items-center gap-6 md:gap-4 lg:gap-9 p-6 mt-12">
        <div>
          <div className="text-24 md:text-18 lg:text-24 font-bold text-solidblue">
            {"{ AKINTOLA }"}
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row items-start md:items-center justify-around gap-4 md:gap-12 ">
          <div className="">
            <p>+234 8136281530</p>
          </div>
          <div>
            <p>akin10400@gmail.com</p>
          </div>
          <div className="flex md:fflex-row lex-col lg:flex-row items-center gap-3 md:gap-3 lg:gap-4">
            <Link to="https://github.com/cy3erdr4g0n">
              <FaGithub
                size={22}
                className="cursor-pointer text-2xl md:text-lg lg:text-xl"
              />
            </Link>

            <Link to="https://x.com/respectgraceman">
              <AiFillTwitterCircle
                size={22}
                className="cursor-pointer text-2xl md:text-lg lg:text-9xl"
              />
            </Link>

            <Link to="https://linkedin.com/in/akintola-john-1801a0238">
              <FaLinkedin
                size={22}
                className="lg:flex cursor-pointer text-2xl md:text-lg lg:text-xl"
              />
            </Link>
            <Link to="https://github.com/AKINTOLAJOHN">
              <FaGithub
                size={22}
                className="cursor-pointer text-2xl md:text-lg lg:text-xl"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      </div>
  );
}
