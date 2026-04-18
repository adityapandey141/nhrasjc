import { Link } from "react-router-dom";
import {
  Facebook,
  Youtube,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Gallery", path: "/gallery" },
    { name: "Core Team", path: "/team" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Human Rights Awareness",
    "Women Empowerment",
    "Youth Skill Development",
    "Anti-Corruption Initiatives",
    "Cultural Promotion",
    "Community Development",
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">NHR</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm leading-tight">
                  NHRSJWF
                </h3>
                <p className="text-xs text-gray-300">
                  Social Justice Welfare Foundation
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              National Human Rights & Anti Corruption Social Justice Welfare
              Foundation - A registered non-profit organization dedicated to
              protecting human rights, fighting corruption, and empowering
              communities.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-orange-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-orange-400">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-orange-400 flex-shrink-0 mt-1"
                />
                <span className="text-gray-300 text-sm">
                  B-7, Khwaja Moinuddin Nagar,
                  <br />
                  Opp. Basera Duplex, Tandalja,
                  <br />
                  Vadodara, Gujarat - 390012
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:nhrascnational@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  nhrascnational@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm font-medium text-orange-400 mb-2">
                Registration Details
              </p>
              <p className="text-xs text-gray-300">Regd: CSR0063265</p>
              <p className="text-xs text-gray-300">NHRSJC: 2023</p>
              <p className="text-xs text-gray-300">ISO 9001: 2015</p>
              <p className="text-xs text-gray-300">NGO ID: GJ/00033750</p>
              <p className="text-xs text-gray-300">
                NitiAyog: U88900GJ2023NPL145998
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} National Human Rights & Anti Corruption Social
              Justice Welfare Foundation. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with{" "}
              <Heart size={14} className="text-red-500 fill-red-500" /> for a
              better society
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
