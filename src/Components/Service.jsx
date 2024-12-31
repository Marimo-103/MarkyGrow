import React from "react";
import Container from "../Components/Container";
import ParagraphText from "../Layers/ParagraphText";
import { FaPlay } from "react-icons/fa";
import service01 from "../assets/service_Img1.png";
import service02 from "../assets/service_Img2.png";
import Title from "../Layers/Title";

const Service = () => {
  let serviceArray = [
    {
      id: 1,
      title: "Service 01",
      image: "Service 01 image",
    },
    {
      id: 2,
      title: "Service 02",
      image: "Service 02 image",
    },
    {
      id: 3,
      title: "Service 03",
      image: "Service 03 image",
    },
  ];

  return (
    <section id="service" className="lg:pt-[135px] md:pt-20 pt-14">
      <Container>
        <div className="head flex flex-col lg:flex-row gap-y-5 justify-between lg:mb-[75px] md:mb-9F mb-8">
          <Title
            className="text-headingText lg:w-[684px]"
            text="Provide the best service with out of the box ideas"
          />
          <ParagraphText
            className="lg:w-[557px]"
            text="We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies."
          />
        </div>
        <div className="box flex flex-col md:flex-row lg:gap-6 gap-4">
          <div className="child lg:w-[438px] lg:h-[382px] md:w-[280px] lg:rounded-[30px] ">
            <img src={service01} alt="" className="w-full h-full" />
          </div>
          <div className="video lg:w-[818px] lg:h-[382px] md:w-[440px] relative">
            <img src={service02} alt="" className="w-full h-full" />
            <div className="play absolute lg:bottom-[-15px] lg:right-[-20px] bottom-[-8px] right-[-6px] lg:w-[163px] lg:h-[163px] md:w-[83px] md:h-[83px] w-[60px] h-[60px] rounded-full lg:border-[12px] md:border-[8px] border-[5px] border-whiteText bg-button flex items-center justify-center">
              <FaPlay className="lg:text-5xl md:text-2xl text-lg" />
            </div>
          </div>
        </div>
        <div className="service lg:pt-16 lg:pb-12 md:pt-10 md:pb-6 pt-8 pb-5">
          <Title text="Our Services" className="text-headingText text-center" />
          <div className="flex flex-wrap md:flex-row flex-col gap-y-5 justify-between mt-10">
            {serviceArray.map((item, index) => (
              <div key={index} className="child lg:w-[400px] lg:h-[210px] md:w-[350px] md:h-[140px] w-full h-[120px] bg-gradient-to-b from-GradBackground01 to-GradBackground02 border md:rounded-[20px] rounded-xl lg:p-8 md:p-6 p-4 flex items-center justify-between">
                <h3 className="lg:text-2xl text-whiteText font-semibold w-1/2">
                  {item.title}
                </h3>
                <div className="img w-1/2 lg:h-[150px] md:h-[100px] h-[80px] border bg-[#f3f3f3]">
                  {item.img}
                  <img src={item.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
