import { SetStateAction, useState } from "react";
import { Search, X } from "lucide-react";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activePage, setActivePage] = useState("home"); // Set the default active page

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavClick = (page: SetStateAction<string>) => {
    setActivePage(page);
  };

  return (
    <header className="py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <img src="src/assets/logofinal.png" alt="Logo" className="w-12 inline-block" />
        </div>
        <ul className="flex items-center space-x-10">
          {/* Home Link */}
          <li>
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className={`relative group ${activePage === "home" ? "text-blue-500" : "hover:text-gray-400"}`}
            >
              Home
              <span
                className={`block h-0.5 ${
                  activePage === "home" ? "w-full bg-blue-500" : "w-0"
                } transition-all duration-300 ease-in-out group-hover:w-full`}
              ></span>
            </a>
          </li>

          {/* Discussion Link */}
          <li>
            <a
              href="#discussion"
              onClick={() => handleNavClick("discussion")}
              className={`relative group ${activePage === "discussion" ? "text-blue-500" : "hover:text-gray-400"}`}
            >
              Discussion
              <span
                className={`block h-0.5 ${
                  activePage === "discussion" ? "w-full bg-blue-500" : "w-0"
                } transition-all duration-300 ease-in-out group-hover:w-full`}
              ></span>
            </a>
          </li>

          {/* Login/Register Link */}
          <li>
            <a
              href="#login"
              onClick={() => handleNavClick("login")}
              className={`relative group ${activePage === "login" ? "text-blue-500" : "hover:text-gray-400"}`}
            >
              Login/Register
              <span
                className={`block h-0.5 ${
                  activePage === "login" ? "w-full bg-blue-500" : "w-0"
                } transition-all duration-300 ease-in-out group-hover:w-full`}
              ></span>
            </a>
          </li>

          {/* Search Icon & Input */}
          <li className="flex items-center">
            {/* Search input with transition */}
            <div
              className={`flex items-center transition-all duration-300 ease-in-out ${
                isSearchOpen ? 'w-48' : 'w-0'
              } overflow-hidden`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 text-gray-900 bg-gray-200 rounded-lg focus:outline-none"
              />
            </div>

            {/* Search Icon/Button */}
            <a onClick={toggleSearch} className="cursor-pointer ml-2">
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;