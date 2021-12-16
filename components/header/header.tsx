import React from "react";
import Image from "next/image";
import logo from "../../Hulu-logo.png";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

// type infoIconsTypes<T> =

import HeaderItem from "../headerItem/headerItem";
function Header() {
  const headerIcons = [
    {
      Icon: HomeIcon,
      title: "HOME",
    },
    {
      Icon: LightningBoltIcon,
      title: "TRENDING",
    },
    {
      Icon: BadgeCheckIcon,
      title: "VERIFIED",
    },
    {
      Icon: CollectionIcon,
      title: "COLLECTIONS",
    },
    {
      Icon: SearchIcon,
      title: "SEARCH",
    },
    {
      Icon: UserIcon,
      title: "ACCOUNT",
    },
  ];

  return (
    <header className="flex flex-col sm:flex-row justify-between">
      <div className="flex flex-grow justify-evenly m-5 max-w-2xl">
        {headerIcons.map((item, i) => (
          <HeaderItem key={i} item={item} />
        ))}
      </div>
      <div className="sm:mr-5 mx-auto -mt-8 sm:mt-0">
        <Image
          src={logo}
          width={90}
          height={65}
          objectFit="contain"
          alt="icon"
        />
      </div>
    </header>
  );
}

export default Header;
