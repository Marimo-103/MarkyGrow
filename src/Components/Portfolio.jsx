import React from "react";
import Container from "./Container";
import Title from "../Layers/Title";
import PortfolioSlider from "../Layers/PortfolioSlider";

const Portfolio = () => {
  return (
    <section id="portfolio" className="lg:pt-[135px] md:pt-20 pt-14">
      <Container>
        <Title text="Real-world examples of how we have helped companies achieve their marketing objectives." className='text-center text-headingText lg:mb-10 mb-6'/>
        <div className="slider lg:max-w-[1344px] lg:pl-16">
            <PortfolioSlider />
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
