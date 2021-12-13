import React from "react";
import requests from "../../services/requests/requests";
import NavItem from "../navItem/navItem";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const handleClick = (key) => {
    router.push(`?genre=${key}`);
  };

  return (
    <div className="relative">
      <div className="flex px-10 sm:px-20 space-x-8 sm:space-x-16 text-xl whitespace-nowrap overflow-x-auto scrollbar-hide">
        {Object.entries(requests).map(([key, value]) => (
          <NavItem
            key={key}
            route={key}
            onClick={(key) => handleClick(key)}
            title={value.title}
          />
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </div>
  );
}

export default Navbar;
