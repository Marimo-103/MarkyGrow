import React from "react";
import Container from "../Components/Container";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Layers/Button";
import Introduction from "../Components/Introduction";
import Service from "../Components/Service";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";

const Home = () => {
  return (
    <div className="">
      {/* section 01 (intro) */}
      <Introduction />

      {/* section 02 (services) */}
      <Service />

      {/* section 03 (about us) */}
      <About />

      {/* ready to work with us */}
      <section id="ready" className="pt-[57px]">
        <Container>
          <div className="flex md:flex-row flex-col gap-y-5 justify-between items-center lg:py-[30px] lg:px-16 md:p-6 px-3 py-4 lg:rounded-[30px] md:rounded-2xl rounded-xl bg-gradient-to-br from-GradBackground01 to-GradBackground02">
            <h1 className="text-whiteText lg:text-[80px] text-4xl font-semibold tracking-tighter leading-[130%]">Ready to work with us ?</h1>
            <Button className='hover:text-buttonTextHover'>
              Get Started
              <FaArrowRight />
            </Button>
          </div>
        </Container>
      </section>

      {/* section 04 (portfolio) */}
      <Portfolio />
    </div>
  );
};

export default Home;
