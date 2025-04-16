import { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

const LogoWithClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* Responsive logo size */}
      <img
        src="/logo.png"
        alt="Dreams POS"
        className="h-10 sm:h-12 w-auto max-w-[120px] sm:max-w-[150px]"
      />

      {/* Hide clock on small screens */}
      <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-accent cursor-pointer h-7">
        <FaClock className="w-3.5 h-3.5 text-white" />
        <span className="text-xs font-medium text-white">{time}</span>
      </div>
    </div>
  );
};

export default LogoWithClock;
