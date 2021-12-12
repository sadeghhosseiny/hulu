import React from "react";
import Image from "next/image";
import logo from "../../Hulu-logo.png";

function Header() {
  return (
    <header>
      <div>
        <Image src={logo} width={100} height={100} objectFit="contain" />
      </div>
    </header>
  );
}

export default Header;
