"use client"
import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";
import NavDesktop from "./Navbar/NavDesktop";
import NavMobile from "./Navbar/NavMobile";

type Props = {};
type NavLink = {
  href: string;
  text: string;
  options?: NavLink[];
};

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="md:relative bg-white w-full z-20 top-0 start-0 ">
      <div className="flex flex-wrap items-center justify-between mx-auto py-3 px-4 lg:max-w-[1340px]   flex-col sm:flex-row">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/navLogo.png"
            alt="jasoberoi"
            className="w-[160px] pb-4 sm:pb-0  md:w-[180px] lg:max-w-[233px] "
          />
        </Link>

        {/* Menu */}
        <div className="flex md:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse items-center w-full justify-between sm:justify-normal sm:w-auto  border-t-[1px] sm:border-none pt-3 sm:pt-0">
          <div className=" rounded mr-4 lg:hidden  text-black">

            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </div>
          <button
            type="button"
            className="text-white focus:outline-none bg-black font-medium text-[12px] sm:text-[16px] py-[12px] sm:py-[14px] px-[30px] text-center uppercase"
          >
            BOOK NOW
          </button>
        </div>

        {/* Desktop Navbar */}
        <NavDesktop />

      </div>
      <NavMobile
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </nav>
  );
};

export default Navbar;

