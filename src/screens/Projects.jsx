import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Projects({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      <div className="md:container mx-auto">
        <div className="mt-5 md:mt-20">
          <div className="text-36 md:text-48 mb-3 text-darkblue p-4">
            <h1 className="font-bold">Projects</h1>
            <p className="text-16 md:text-20">Things I’ve built so far</p>
          </div>
          <div>
            <Project />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}