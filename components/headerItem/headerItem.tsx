import React from "react";

type itemTypes = {
  item: {
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
  };
};

function HeaderItem({ item }: itemTypes) {
  console.log(item);
  return (
    <div className="text-white flex flex-col justify-center items-center w-12 sm:w-20 cursor-pointer group hover:text-white">
      <item.Icon className="h-6 mx-auto group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 transition transform duration-300 tracking-widest">
        {item.title}
      </p>
    </div>
  );
}

export default HeaderItem;
