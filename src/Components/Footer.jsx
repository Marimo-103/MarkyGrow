import React from "react";
import Container from "./Container";
import footer_logo from "/markygrowLogo_whole_rezize.svg";
import footer_logo_dark from "/markygrowLogo_whole_rezize_dark.svg";
import ParagraphText from "../Layers/ParagraphText";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="dark:bg-BgDark dark:duration-300 duration-300">
      <Container className="flex flex-col md:flex-row gap-y-8 justify-between lg:py-8 py-4">
        <div className="text flex flex-col lg:gap-[30px] gap-4 2xl:w-[534px] lg:w-[434px] md:w-[350px] ">
          <div className="logo lg:w-[300px] md:w-[230px] w-[150px]">
            <a href="#" className="dark:hidden block dark:duration-300 duration-300">
              <img src={footer_logo} alt="Logo" />
            </a>
            <a href="#" className="hidden dark:block dark:duration-300 duration-300">
              <img src={footer_logo_dark} alt="Logo" />
            </a>
          </div>
          <ParagraphText text="Want to launch your business on meta platforms? We got you covered. MakryGrow will provide one stop solution for launching your business across meta platforms. We provide full stack meta marketing services for your business growth." />
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
        <div className="navigation flex 2xl:gap-[115px] lg:gap-6 justify-between md:justify-normal md:gap-5">
          <ul className="flex flex-col lg:gap-y-6 gap-3">
            <h5 className="lg:text-lg text-base text-headingText dark:text-button dark:duration-300 duration-300 font-semibold lg:mb-6 mb-3">
              Navigation
            </h5>
            <li>
              <a href="#">
                <ParagraphText
                  text="Home"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
            <li>
              <a href="#service">
                <ParagraphText
                  text="Services"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <ParagraphText
                  text="Portfolio"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <ParagraphText
                  text="About"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
            <li>
              <a href="#contact">
                <ParagraphText
                  text="Contacts"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
          </ul>
          {/* <ul className="hidden md:flex flex-col lg:gap-y-6 gap-3">
            <h5 className="lg:text-lg text-base text-headingText dark:text-button dark:duration-300 duration-300 font-semibold lg:mb-6 mb-3">
              Licence
            </h5>
            <li>
              <a href="#">
                <ParagraphText
                  text="Privacy Policy"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
            <li>
              <a href="#service">
                <ParagraphText
                  text="Copyright"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
            <li>
              <a href="#contact">
                <ParagraphText
                  text="Email Address"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
          </ul> */}
          <ul className="flex flex-col lg:gap-y-6 gap-3">
            <h5 className="lg:text-lg text-base text-headingText dark:text-button dark:duration-300 duration-300 font-semibold lg:mb-6 mb-3">
              Contacts
            </h5>
            <li className=" flex items-center lg:gap-2 gap-1">
              <BiSolidPhone className="text-button lg:text-xl" />
              <a href="tel:+8801306231753">
                <ParagraphText
                  text="+88 01306231753"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
            <li className=" flex items-center lg:gap-2 gap-1">
              <HiMail className="text-button lg:text-xl" />
              <a href="mailto:agency@markygrow.com">
                <ParagraphText
                  text="agency@markygrow.com"
                  className="hover:text-buttonText duration-300"
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="lg:pb-8 pb-3">
        <div className="line h-[1px] w-full bg-paragraphText dark:bg-button dark:duration-300 duration-300 opacity-40"></div>
        <div className="flex md:flex-row flex-col justify-evenly items-center mt-1 opacity-50">
          <ParagraphText
            className=""
            text="© MarkyGrow. All rights reserved."
          />
          <div className="flex gap-1">
            <ParagraphText text="Designed and Developed by" />
            <a
              className="underline decoration-buttonText decoration-wavy"
              href="https://www.fiverr.com/s/pdANBqZ"
              target="_blank"
            >
              <ParagraphText text="Mahmudul" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
