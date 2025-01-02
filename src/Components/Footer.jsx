import React from "react";
import Container from "./Container";
import footer_logo from "/footer_logo.png";
import ParagraphText from "../Layers/ParagraphText";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <Container className="flex flex-col md:flex-row gap-y-8 justify-between lg:py-8 py-4">
        <div className="text flex flex-col lg:gap-[30px] gap-4 2xl:w-[534px] lg:w-[434px] md:w-[350px] ">
          <div className="logo lg:w-[300px] md:w-[230px] w-[150px]">
            <a href="#">
              <img src={footer_logo} alt="Logo" />
            </a>
          </div>
          <ParagraphText text="Want to launch you business on meta platforms? We got you covered. MakryGrow will provide one stop solution for launching you business across meta platforms. We provide full stack meta marketing services for your business growth." />
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
        </div>
        <div className="navigation flex 2xl:gap-[115px] lg:gap-10 justify-between md:justify-normal md:gap-5">
          <ul className="flex flex-col lg:gap-y-6 gap-3">
            <h5 className="lg:text-lg text-base text-headingText font-semibold lg:mb-6 mb-3">
              Navigation
            </h5>
            <li>
              <a href="#">
                <ParagraphText text="Home" />
              </a>
            </li>
            <li>
              <a href="#service">
                <ParagraphText text="Services" />
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <ParagraphText text="Portfolio" />
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <ParagraphText text="About" />
              </a>
            </li>
            <li>
              <a href="#contact">
                <ParagraphText text="Contacts" />
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:gap-y-6 gap-3">
            <h5 className="lg:text-lg text-base text-headingText font-semibold lg:mb-6 mb-3">
              Licence
            </h5>
            <li>
              <a href="#">
                <ParagraphText text="Privacy Policy" />
              </a>
            </li>
            <li>
              <a href="#service">
                <ParagraphText text="Copyright" />
              </a>
            </li>
            <li>
              <a href="#contact">
                <ParagraphText text="Email Address" />
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:gap-y-6 gap-3">
            <h5 className="lg:text-lg text-base text-headingText font-semibold lg:mb-6 mb-3">
              Contacts
            </h5>
            <li className=" flex items-center lg:gap-2 gap-1">
              <BiSolidPhone className="text-button lg:text-xl" />
              <a href="#">
                <ParagraphText text="(406) 555-0120" />
              </a>
            </li>
            <li className=" flex items-center lg:gap-2 gap-1">
              <HiMail className="text-button lg:text-xl" />
              <a href="#service">
                <ParagraphText text="Hey@admin.com" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="lg:pb-8 pb-3">
        <div className="line h-[1px] w-full bg-paragraphText opacity-40"></div>
        <ParagraphText
          className="text-center mt-1 opacity-50"
          text="copyright@allrightsreserved"
        />
      </Container>
    </footer>
  );
};

export default Footer;
