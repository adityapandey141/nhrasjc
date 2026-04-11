import { Mail } from "lucide-react";

const BannerHeader = () => {
  return (
    <div className="w-full hidden md:block">
      {/* Top Red Bar - Registration Details */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
            <span>
              <strong>Regd :</strong> CSR0063265
            </span>
            <span>
              <strong>NHRSJC :</strong> 2023
            </span>
            <span>
              <strong>ISO 9001 :</strong> 2015
            </span>
            <span>
              <strong>NGO ID :</strong> GJ/00033750
            </span>
            <span>
              <strong>NitiAyog :</strong> U88900GJ2023NPL145998
            </span>
          </div>
        </div>
      </div>

      {/* Main Blue Banner */}
      <div className="relative bg-blue-800 overflow-hidden">
        {/* Diagonal Red Stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600 transform skew-x-[-20deg] translate-x-20" />

        <div className="container-custom relative z-10 py-4 md:py-6">
          <div className="flex items-center gap-4 md:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="h-20 md:h-28" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-white">
              {/* Hindi Text */}
              <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-yellow-400 drop-shadow-md">
                राष्ट्रीय मानवाधिकार एवं भ्रष्टाचार विरोधी सामाजिक न्याय कल्याण
                फाउन्डेशन
              </h1>

              {/* English Text */}
              <h2 className="text-base md:text-2xl lg:text-3xl font-bold text-red-500 drop-shadow-md">
                National Human Rights & Anti Corruption,
                <span className="text-yellow-400">
                  Social Justice Welfare Foundation
                </span>
              </h2>

              {/* Incorporated Text */}
              <p className="text-xs md:text-sm text-yellow-300 italic mt-1">
                Incorporated under the legislation of Government of India Under
                Act,1882
              </p>

              {/* Address */}
              <p className="text-xs md:text-sm mt-2">
                <strong>National Office :-</strong> B-7, Khwaja Moinuddin Nagar,
                Opp.Basera Duplex, Tandalja, Vadodara-390012
              </p>

              {/* Email */}
              <p className="text-xs md:text-sm flex items-center gap-1 text-yellow-400 mt-1">
                <Mail size={14} />
                <strong>Email Id.-</strong>nhrascnational@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
