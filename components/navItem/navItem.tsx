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
      className="text-white cursor-pointer transition transform duration-300 hover:scale-110"
    >
      {title}
    </h1>
  );
}

export default NavItem;
