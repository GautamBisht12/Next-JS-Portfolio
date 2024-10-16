import { FaGithub, FaSun } from "react-icons/fa";
import DarkMode from "./DarkMode"

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-center items-center w-full ">
        <nav className="w-full flex justify-center items-center pt-4 pb-4">
          <ul className="flex  justify-between items-center  w-[70%] fixed top-6 z-50 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-4">
            <span className="flex gap-8">
              <h3>Bisht</h3>
            </span>

            <span className="flex items-center gap-10">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <FaGithub size={22} />
                </a>
              </li>
            <DarkMode/>
            </span>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
