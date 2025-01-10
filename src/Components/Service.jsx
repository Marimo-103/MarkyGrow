import React from "react";
import Container from "../Components/Container";
import ParagraphText from "../Layers/ParagraphText";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import service01 from "../assets/service_Img1.png";
import service02 from "../assets/service_Img2.png";
import Title from "../Layers/Title";
import Button from "../Layers/Button";

const Service = () => {
  let serviceArray = [
    {
      id: 1,
      title: "Full Stack F-commerce",
      link: "https://forms.gle/8bixY3N94JHZtoBa8",
    },
    {
      id: 2,
      title: "Meta Ads",
      link: " https://forms.gle/qb5Nd7Pn8Xon4n1J8",
    },
    {
      id: 3,
      title: "Customised Service",
      link: "https://forms.gle/oA2WXMVuCvaRB4Fh9",
    },
  ];

  return (
    <section
      id="service"
      className="lg:pt-[135px] md:pt-20 pt-14 dark:bg-BgDark dark:duration-300 duration-300"
    >
      <Container>
        <div className="head flex flex-col lg:flex-row gap-y-5 justify-center lg:mb-[75px] md:mb-9F mb-8">
          <Title
            className="text-headingText dark:text-whiteText text-center"
            text="We provide the best services possible for business growth across Meta Platforms"
          />
          {/* <ParagraphText
            className="lg:w-[557px]"
            text="We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies."
          /> */}
        </div>
        <div className="box flex flex-col md:flex-row lg:gap-6 gap-4 justify-center">
          {/* <div className="child lg:w-[438px] lg:h-[382px] md:w-[280px] lg:rounded-[30px] ">
            <img src={service01} alt="" className="w-full h-full" />
          </div> */}
          <div className="video lg:w-[818px] lg:h-[382px] md:w-[440px] relative">
            <img src={service02} alt="" className="w-full h-full" />
            <div className="play absolute lg:bottom-[-15px] lg:right-[-20px] bottom-[-8px] right-[-6px] lg:w-[163px] lg:h-[163px] md:w-[83px] md:h-[83px] w-[60px] h-[60px] rounded-full lg:border-[12px] md:border-[8px] border-[5px] border-whiteText bg-button flex items-center justify-center">
              <FaPlay className="lg:text-5xl md:text-2xl text-lg" />
            </div>
          </div>
        </div>
        <div className="service lg:pt-16 lg:pb-12 md:pt-10 md:pb-6 pt-8 pb-5">
          <Title
            text="Our Services"
            className="text-headingText dark:text-whiteText text-center"
          />
          <div className="flex flex-wrap md:flex-row flex-col gap-y-5 items-center justify-between mt-10">
            {serviceArray.map((item, index) => (
              <div
                key={index}
                className="child lg:w-[400px] lg:h-[210px] md:w-[350px] md:h-[180px] w-[80%] h-[160px]  bg-gradient-to-b from-GradBackground01 to-GradBackground02 dark:from-GradBackground01Dark dark:to-GradBackground02Dark border md:rounded-[20px] rounded-xl lg:p-8 md:p-6 p-4 flex flex-col lg:gap-y-4 items-center justify-evenly duration-300 hover:scale-[1.1] hover:shadow-serviceBox dark:hover:shadow-serviceBoxDark cursor-pointer dark:duration-300"
              >
                <h3 className="lg:text-3xl text-xl text-center text-whiteText dark:text-BgDark font-bold">
                  {item.title}
                </h3>
                <a href={item.link} target="_blank">
                  <Button className="hover:text-whiteText dark:hover:text-buttonText dark:bg-buttonText dark:text-button dark:hover:bg-transparent dark:border-buttonText">
                    Take Service
                    <FaArrowRight />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
