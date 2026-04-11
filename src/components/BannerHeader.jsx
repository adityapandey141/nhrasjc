import { Mail } from "lucide-react";

const BannerHeader = () => {
  return (
    <div className="w-full">
      {/* Top Red Bar - Registration Details */}

      {/* Main Blue Banner */}
      <div className="relative  overflow-hidden">
        {/* Diagonal Red Stripe */}
        {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600 transform skew-x-[-20deg] translate-x-20" /> */}

        <div className="container-custom relative z-10 pt-2 ">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <img src="/topimg.png" alt="Logo" className="md:h-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
