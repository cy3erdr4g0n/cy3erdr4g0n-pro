import Navbar from "../components/Navbar";
import Tech from "../components/Technologies";
import Footer from "../components/Footer";

export default function TechStack({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      <div className="md:container mx-auto">
        <div className="mt-5 md:mt-20">
          <div className="text-36 md:text-48 mb-3 text-darkblue p-4">
            <h1 className="font-bold">My Tech Stack</h1>
            <p className="text-16 md:text-20">
              {" "}
              Technologies I’ve been working with recently
            </p>
          </div>
          <div>
            <Tech />
          </div>
          <div className="mt-32">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
