import React, { useEffect, useRef, useState } from "react";
import logo from "/markygrowLogo_whole_rezize.svg";
import Container from "./Container";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Switch from "../Layers/Switch";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    function size() {
      if (window.innerWidth < 1024) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    }
    size();
    window.addEventListener("resize", size);
  }, []);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      console.log(menuRef);
    });
  }, []);

  return (
    <div className="lg:py-[30px] md:py-6 py-4 bg-white border-b drop-shadow-md sticky top-0 left-0 w-full z-50">
      <Container className="flex justify-between items-center relative z-50">
        <div className="logo lg:w-[139px] lg:h-8 md:w-[130px] w-[110px]">
          <img src={logo} alt="" />
        </div>
        <nav className="">
          <ul
            className={`flex flex-col lg:flex-row lg:justify-normal items-start lg:gap-8 gap-2 lg:static absolute top-full md:right-4 right-3 lg:bg-transparent bg-button lg:p-0 md:px-6 md:py-7 px-4 py-5 rounded-md duration-300 z-50 ${
              showMenu ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText font-semibold hover:text-black">
              <a href="#service" className="lg:text-sm ">
                Our Services
              </a>
              <FaChevronDown className="text-xs" />
            </li>
            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText font-semibold hover:text-black">
              <a href="#about" className="lg:text-sm">
                About Us
              </a>
              <FaChevronDown className="text-xs" />
            </li>
            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText font-semibold hover:text-black">
              <a href="#portfolio" className="lg:text-sm">
                Portfolio
              </a>
              <FaChevronDown className="text-xs" />
            </li>
            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText font-semibold hover:text-black">
              <a href="#contact" className="lg:text-sm">
                Contact Us
              </a>
              <FaChevronDown className="text-xs" />
            </li>
            <div className="btn flex flex-col lg:hidden gap-4 mt-4 md:mt-6">
              <div className="icons flex items-center gap-3">
                <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white shadow-icons flex items-center justify-center text-socialIcons">
                  <a
                    href="https://www.facebook.com/MarkyGrow?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </div>
                <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white shadow-icons flex items-center justify-center text-socialIcons">
                  <a href="">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white shadow-icons flex items-center justify-center text-socialIcons">
                  <a
                    href="https://www.instagram.com/markygrow?igsh=MTFiMDVmcG5pZXJxNw=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div className="theme">
                <Switch />
              </div>
            </div>
          </ul>
          <div
          onClick={() => setShowMenu(!showMenu)}
          className="navRes lg:hidden cursor-pointer"
        >
          <HiMiniBars3BottomRight
            className={`text-xl md:text-2xl text-buttonText duration-300 ${
              showMenu ? "scale-x-[-1]" : "scale-x-[1]"
            }`}
          />
        </div>
        </nav>
        <div className="btn hidden lg:flex items-center lg:gap-5">
          <div className="icons flex items-center lg:gap-3">
            <div className="child lg:w-[34px] lg:h-[34px] rounded-full bg-white shadow-icons flex items-center justify-center text-socialIcons">
              <a
                href="https://www.facebook.com/MarkyGrow?mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="child lg:w-[34px] lg:h-[34px] rounded-full bg-white shadow-icons flex items-center justify-center text-socialIcons">
              <a href="">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="child lg:w-[34px] lg:h-[34px] rounded-full bg-white shadow-icons flex items-center justify-center text-socialIcons">
              <a
                href="https://www.instagram.com/markygrow?igsh=MTFiMDVmcG5pZXJxNw=="
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="theme">
            <Switch />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
