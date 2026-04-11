import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Work", path: "/work" },
  { name: "Core Team", path: "/team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white py-3"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">NHRSJWF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-sm md:text-base leading-tight">
                <span className="gradient-text">NHRSJWF</span>
              </h1>
              <p className="text-xs text-gray-500">
                Social Justice Welfare Foundation
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? "text-purple-700"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-700 to-orange-500 transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-3/4"
                      : "w-0 group-hover:w-3/4"
                  }`}
                />
              </Link>
            ))}
            <Link to="/" className="ml-4 btn-gradient text-sm py-2">
              Donate Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-purple-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 font-medium transition-colors text-left ${
                    location.pathname === link.path
                      ? "text-purple-700 bg-purple-50"
                      : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/" className="mt-4 mx-4 btn-gradient text-center">
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
