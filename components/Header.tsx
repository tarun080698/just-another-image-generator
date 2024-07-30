import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo2.png";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="flex flex-col lg:flex-row p-2 md:p-5 justify-between sticky top-0 z-50 items-center bg-slate-800 shadow-[#b5d0f0] shadow-lg text-white space-y-2">
      {/* left part */}
      <div className="flex flex-row space-x-2 items-start">
        <Image
          src={logo}
          className="w-16 h-16 md:w-16 md:h-20"
          alt="JAIG-logo"
          width={65}
          height={65}
        />
        <div className="md:mr-2">
          <h1 className="text-xl md:text-3xl">
            <span className="underline underline-offset-8 italic">
              Just Another
            </span>
            &nbsp;
            <em>Image Generator</em>
          </h1>
          <h2 className="font-light text-base md:text-xl mt-2">
            Powered by DALL.E 2, chatGPT & Azure
          </h2>
        </div>
      </div>
      {/* right div */}
      <div className="flex space-x-3 items-end">
        <Link
          href={"https://github.com/tarun080698/just-another-image-generator"}
          className="text-lg md:text-2xl px-2 font-extralight flex justify-evenly items-center"
        >
          <FaGithub className="w-8 h-8 mr-2" />
          Github
        </Link>
      </div>
    </header>
  );
}

export default Header;
