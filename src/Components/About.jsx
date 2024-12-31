import React from "react";
import Container from "./Container";
import Title from "../Layers/Title";
import ParagraphText from "../Layers/ParagraphText";

const About = () => {
  return (
    <section id="about" className="lg:pt-[135px] md:pt-20 pt-14">
      <Container>
        <Title
          text="About Us"
          className="text-headingText lg:mb-10 mb-6 text-center"
        />
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-y-8">
          <div className="texts lg:w-[45%]">
            <h3 className="lg:text-3xl text-xl text-headingText font-medium leading-[120%] tracking-tight lg:mb-6 md:mb-3 mb-2">
              Who are we?
            </h3>
            <ParagraphText text="we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies." />
          </div>
          <div className="members lg:w-[45%] flex justify-center gap-x-5">
            <div className="child md:w-[300px] flex flex-col items-center gap-y-5">
                <div className="img md:w-[150px] md:h-[150px] h-[120px] w-[120px] rounded-full border relative">
                    <img src="" alt="" />
                </div>
                <div className="text-center">
                    <h4 className="lg:text-2xl text-xl text-headingText font-semibold leading-[120%] tracking-tight">
                        Fuad Hasan Chisti
                    </h4>
                    <ParagraphText text='Founder & CEO | Digital Marketer'/>
                </div>
            </div>
            <div className="child md:w-[300px] flex flex-col items-center gap-y-5">
                <div className="img md:w-[150px] md:h-[150px] h-[120px] w-[120px] rounded-full border">
                    <img src="" alt="" />
                </div>
                <div className="text-center">
                    <h4 className="lg:text-2xl text-xl text-headingText font-semibold leading-[120%] tracking-tight">
                        Irfanul Haque Shakti
                    </h4>
                    <ParagraphText text='Design Head | Graphics Designer'/>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
