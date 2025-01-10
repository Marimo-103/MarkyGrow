import React from "react";
import Container from "./Container";
import Title from "../Layers/Title";
import ParagraphText from "../Layers/ParagraphText";
import Fuad from '../assets/Fuad.jpg'
import Shakti from '../assets/Shakti.png'

const About = () => {
  return (
    <section id="about" className="lg:pt-[135px] md:pt-20 pt-14 dark:bg-BgDark dark:duration-300 duration-300">
      <Container>
        <Title
          text="About Us"
          className="text-headingText dark:text-whiteText lg:mb-10 mb-6 text-center"
        />
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-y-8">
          <div className="texts lg:w-[45%]">
            <h3 className="lg:text-3xl text-xl text-headingText dark:text-whiteText font-medium leading-[120%] tracking-tight lg:mb-6 md:mb-3 mb-2">
              Who are we?
            </h3>
            <ParagraphText text="MarkyGrow is more than just a Digital Marketing Agency. We are team of dedicated individuals who help businesses navigate the dynamic world of meta platforms. The mission is to empower businesses with data-driven meta strategies and innovative designs to achieve growth and maximize ROAS. The vision is to become the leading partner for businesses who depend on meta platforms for growth, Globally." />
          </div>
          <div className="members lg:w-[45%] flex justify-center gap-x-5">
            <div className="child md:w-[300px] flex flex-col items-center gap-y-5">
                <div className="img md:w-[150px] md:h-[150px] h-[120px] w-[120px] rounded-full border border-buttonText dark:border-button dark:duration-300 duration-300 md:p-1 p-[2px]">
                    <img src={Fuad} alt="" className="h-full w-full rounded-full object-cover object-top"/>
                </div>
                <div className="text-center">
                    <h4 className="lg:text-2xl text-xl text-headingText dark:text-button dark:duration-300 duration-300 font-semibold leading-[120%] tracking-tight">
                        Fuad Hasan Chisti
                    </h4>
                    <ParagraphText text='Founder & CEO | Digital Marketer'/>
                </div>
            </div>
            <div className="child md:w-[300px] flex flex-col items-center gap-y-5">
                <div className="img md:w-[150px] md:h-[150px] h-[120px] w-[120px] rounded-full border border-buttonText dark:border-button dark:duration-300 duration-300 md:p-1 p-[2px]">
                    <img src={Shakti} alt="" className="h-full w-full rounded-full object-cover object-bottom"/>
                </div>
                <div className="text-center">
                    <h4 className="lg:text-2xl text-xl text-headingText dark:text-button dark:duration-300 duration-300 font-semibold leading-[120%] tracking-tight">
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
