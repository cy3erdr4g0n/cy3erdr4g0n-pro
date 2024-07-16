import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      <div className="md:container mx-auto">
        <div className="flex justify-center items-center flex-col w-full h-[50vh]">
          <h1 className="text-50 text-darkblue font-bold">
            For any questions please mail us:
          </h1>
          <h1 className="text-50 font-bold bg-gradient-to-tr from-cyan via-magenta to-magenta text-dark bg-clip-text">
            akin10400@gmail.com
          </h1>
        </div>

        <div className="mt-40">
          <Footer />
        </div>
      </div>
    </div>
  );
}
