import React, { useEffect, useRef, useState } from "react";
import logo from "/markygrowLogo_whole_rezize.svg";
import logoDark from "/markygrowLogo_whole_rezize_dark.svg";
import Container from "./Container";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import ParagraphText from "../Layers/ParagraphText";
import { Switch } from "@mui/material";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    function size() {
      if (window.innerWidth < 1000) {
        let handler = (e) => {
          if (!menuRef.current.contains(e.target)) {
            setShowMenu(false);
          }
        };
        document.addEventListener("mousedown", handler);
        return () => {
          document.removeEventListener("mousedown", handler);
        };
      } else {
        setShowMenu(true);
      }
    }
    size();
    window.addEventListener("resize", size);
  }, [showMenu]);
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setShowMenu(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, []);

  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="lg:py-[30px] md:py-6 py-4 bg-white dark:bg-BgDark dark:duration-300 duration-300 border-b dark:border-BgDark drop-shadow-md dark:drop-shadow-2xl sticky top-0 left-0 w-full z-50">
      <Container className="flex justify-between items-center z-50">
        <div className="logo lg:w-[139px] lg:h-8 md:w-[130px] w-[110px]">
          <a
            href="#"
            className="dark:hidden block dark:duration-300 duration-300"
          >
            <img src={logo} alt="" />
          </a>
          <a
            href="#"
            className="hidden dark:block dark:duration-300 duration-300"
          >
            <img src={logoDark} alt="" />
          </a>
        </div>
        <nav className="">
          <ul
            className={`flex flex-col lg:flex-row lg:justify-normal items-start lg:gap-8 gap-2 lg:static absolute top-full right-0 lg:bg-transparent dark:lg:bg-transparent bg-button dark:bg-GradBackground02 lg:p-0 md:pl-8 md:pr-20 md:py-7 pl-6 pr-12 py-5 rounded-md duration-300 z-50 ${
              showMenu ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            ref={menuRef}
          >
            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText dark:text-whiteText dark:hover:text-button font-semibold hover:text-black group dark:duration-300">
              <a href="#service" className="lg:text-sm ">
                Services
              </a>
              <FaChevronDown className="text-xs group-hover:text-button duration-300" />
            </li>

            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText dark:text-whiteText dark:hover:text-button font-semibold hover:text-black group dark:duration-300">
              <a href="#portfolio" className="lg:text-sm">
                Portfolio
              </a>
              <FaChevronDown className="text-xs group-hover:text-button duration-300" />
            </li>
            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText dark:text-whiteText dark:hover:text-button font-semibold hover:text-black group dark:duration-300">
              <a href="#about" className="lg:text-sm">
                About Us
              </a>
              <FaChevronDown className="text-xs group-hover:text-button duration-300" />
            </li>
            <li className="flex lg:gap-2 gap-1 items-center justify-center text-headingText dark:text-whiteText dark:hover:text-button font-semibold hover:text-black group dark:duration-300">
              <a href="#contact" className="lg:text-sm">
                Contact Us
              </a>
              <FaChevronDown className="text-xs group-hover:text-button duration-300" />
            </li>
            <div className="btn flex flex-col lg:hidden gap-4 mt-4 md:mt-6">
              <div className="icons flex items-center gap-3">
                <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white dark:bg-button shadow-icons dark:shadow-iconsDark dark:hover:shadow-none dark:duration-300 flex items-center justify-center text-socialIcons dark:text-BgDark">
                  <a
                    href="https://www.facebook.com/MarkyGrow?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </div>
                <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white dark:bg-button shadow-icons dark:shadow-iconsDark dark:hover:shadow-none dark:duration-300 flex items-center justify-center text-socialIcons dark:text-BgDark">
                  <a
                    href="https://www.linkedin.com/company/markygrow/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white dark:bg-button shadow-icons dark:shadow-iconsDark dark:hover:shadow-none dark:duration-300 flex items-center justify-center text-socialIcons dark:text-BgDark">
                  <a
                    href="https://www.instagram.com/markygrow?igsh=MTFiMDVmcG5pZXJxNw=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div>
                <button className="flex gap-0 items-center">
                  <CiLight className="text-xl text-headingText dark:text-whiteText duration-300 dark:duration-300" />
                  <Switch checked={theme === "dark"} onChange={toggleTheme} />
                  <MdDarkMode className="text-xl text-headingText dark:text-whiteText duration-300 dark:duration-300" />
                </button>
              </div>
              {/* <div className="theme">
                <Switch />
              </div> */}
            </div>
          </ul>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="navRes lg:hidden cursor-pointer"
          >
            <HiMiniBars3BottomRight
              className={`text-xl md:text-2xl text-buttonText dark:text-button duration-300 ${
                showMenu ? "scale-x-[-1]" : "scale-x-[1]"
              }`}
            />
          </div>
        </nav>
        <div className="btn hidden lg:flex items-center lg:gap-5">
          <div>
            <button className="flex gap-0 items-center">
              <CiLight className="text-xl text-headingText dark:text-whiteText duration-300 dark:duration-300" />
              <Switch checked={theme === "dark"} onChange={toggleTheme} />
              <MdDarkMode className="text-xl text-headingText dark:text-whiteText duration-300 dark:duration-300" />
            </button>
          </div>
          <div className="icons flex items-center gap-3">
            <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white shadow-icons dark:shadow-iconsDark dark:hover:shadow-none dark:duration-300 hover:shadow-none border-transparent duration-300 flex items-center justify-center text-socialIcons border hover:border-button dark:bg-button dark:text-BgDark">
              <a
                href="https://www.facebook.com/MarkyGrow?mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white shadow-icons dark:shadow-iconsDark dark:hover:shadow-none dark:duration-300 hover:shadow-none border-transparent duration-300 flex items-center justify-center text-socialIcons border hover:border-button dark:bg-button dark:text-BgDark">
              <a
                href="https://www.linkedin.com/company/markygrow/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="child lg:w-[34px] lg:h-[34px] w-[28px] h-[28px] rounded-full bg-white shadow-icons dark:shadow-iconsDark dark:hover:shadow-none dark:duration-300 hover:shadow-none border-transparent duration-300 flex items-center justify-center text-socialIcons border hover:border-button dark:bg-button dark:text-BgDark">
              <a
                href="https://www.instagram.com/markygrow?igsh=MTFiMDVmcG5pZXJxNw=="
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
