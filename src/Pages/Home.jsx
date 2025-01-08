import React from "react";
import Container from "../Components/Container";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Layers/Button";
import Introduction from "../Components/Introduction";
import Service from "../Components/Service";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div className="">
      {/* section 01 (intro) */}
      <Introduction />

      {/* section 02 (services) */}
      <Service />

      {/* section 03 (portfolio) */}
      <Portfolio />

      {/* ready to work with us */}
      <section id="ready" className="pt-[57px] dark:bg-BgDark dark:duration-300 duration-300">
        <Container>
          <div className="flex md:flex-row flex-col gap-y-5 justify-between items-center lg:py-[28px] xl:py-[60px] xl:px-10 lg:px-10 md:p-6 px-3 py-4 lg:rounded-[30px] md:rounded-2xl rounded-xl bg-gradient-to-br from-GradBackground01 to-GradBackground02 dark:from-GradBackground01Dark dark:to-GradBackground02Dark dark:duration-300 duration-300">
            <h1 className="text-whiteText dark:text-BgDark dark:duration-300 duration-300 text-center lg:text-[80px] md:text-4xl text-3xl font-semibold tracking-tighter leading-[130%]">
              Ready to work with us ?
            </h1>
            <Button className="hover:text-buttonTextHover dark:hover:text-buttonText">
              <a href="#contact">Get Started</a>
              <FaArrowRight />
            </Button>
          </div>
        </Container>
      </section>

      {/* section 04 (about us) */}
      <About />

      {/* section 05 (contact us) */}
      <Contact />
    </div>
  );
};

export default Home;
