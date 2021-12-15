import React from "react";
// import { useRouter } from "next/router";

type titleTypes = {
  title: string;
  route: string;
  onClick: (value: string) => void;
};

function NavItem({ title, route, onClick }: titleTypes) {
  return (
    <h1
      onClick={() => onClick(route)}
      className="text-gray-400 pb-2 cursor-pointer transition transform duration-300 hover:scale-125 hover:text-white"
    >
      {title}
    </h1>
  );
}

export default NavItem;
