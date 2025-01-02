import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
import portfolio01 from "../assets/Portfolio/Portfolio-1.png";
import portfolio02 from "../assets/Portfolio/Portfolio-2.png";
import portfolio03 from "../assets/Portfolio/Portfolio-3.png";
import portfolio04 from "../assets/Portfolio/Portfolio-4.png";
import portfolio05 from "../assets/Portfolio/Portfolio-5.png";
import portfolio06 from "../assets/Portfolio/Portfolio-6.png";
import portfolio07 from "../assets/Portfolio/Portfolio-7.png";
import portfolio08 from "../assets/Portfolio/Portfolio-8.png";
import portfolio09 from "../assets/Portfolio/Portfolio-9.png";
import portfolio10 from "../assets/Portfolio/Portfolio-10.png";
import portfolio11 from "../assets/Portfolio/Portfolio-11.png";
import portfolio12 from "../assets/Portfolio/Portfolio-12.png";
import portfolio13 from "../assets/Portfolio/Portfolio-13.png";
import portfolio14 from "../assets/Portfolio/Portfolio-14.jpg";
import portfolio15 from "../assets/Portfolio/Portfolio-15.jpg";
import portfolio16 from "../assets/Portfolio/Portfolio-16.png";
import portfolio17 from "../assets/Portfolio/Portfolio-17.png";
import portfolio18 from "../assets/Portfolio/Portfolio-18.png";
import portfolio19 from "../assets/Portfolio/Portfolio-19.png";
import portfolio20 from "../assets/Portfolio/Portfolio-20.png";
import portfolio21 from "../assets/Portfolio/Portfolio-21.png";
import portfolio22 from "../assets/Portfolio/Portfolio-22.png";
import portfolio23 from "../assets/Portfolio/Portfolio-23.png";
import portfolio24 from "../assets/Portfolio/Portfolio-24.png";
import portfolio25 from "../assets/Portfolio/Portfolio-25.png";
import portfolio26 from "../assets/Portfolio/Portfolio-26.png";

const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const portfolios = [
    {
      id: 1,
      image: portfolio01,
    },
    {
      id: 2,
      image: portfolio02,
    },
    {
      id: 3,
      image: portfolio03,
    },
    {
      id: 4,
      image: portfolio04,
    },
    {
      id: 5,
      image: portfolio05,
    },
    {
      id: 6,
      image: portfolio06,
    },
    {
      id: 7,
      image: portfolio07,
    },
    {
      id: 8,
      image: portfolio08,
    },
    {
      id: 9,
      image: portfolio09,
    },
    {
      id: 10,
      image: portfolio10,
    },
    {
      id: 11,
      image: portfolio11,
    },
    {
      id: 12,
      image: portfolio12,
    },
    {
      id: 13,
      image: portfolio13,
    },
    {
      id: 14,
      image: portfolio14,
    },
    {
      id: 15,
      image: portfolio15,
    },
    {
      id: 16,
      image: portfolio16,
    },
    {
      id: 17,
      image: portfolio17,
    },
    {
      id: 18,
      image: portfolio18,
    },
    {
      id: 19,
      image: portfolio19,
    },
    {
      id: 20,
      image: portfolio20,
    },
    {
      id: 21,
      image: portfolio21,
    },
    {
      id: 22,
      image: portfolio22,
    },
    {
      id: 23,
      image: portfolio23,
    },
    {
      id: 24,
      image: portfolio24,
    },
    {
      id: 25,
      image: portfolio25,
    },
    {
      id: 26,
      image: portfolio26,
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {portfolios.map((item, index) => (
          <div className="lg:w-[350px] md:w-[230px] w-[150px] overflow-hidden">
            <div className="lg:p-5 md:p-5 p-3 !h-full !w-full overflow-hidden">
              <div className="lg:border-[8px] border-[4px] lg:rounded-[20px] rounded-[12px] border-paragraphText border-opacity-35 backdrop-blur-[67px] !h-full !w-full overflow-hidden">
                <div className="img !h-full !w-full overflow-hidden">
                  <Image
                    src={item.image}
                    className="!h-full !w-full !inline-block !object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioSlider;

<div className="lg:w-[350px] md:w-[230px] w-[150px] overflow-hidden">
  <div className="lg:p-5 md:p-5 p-3  h-full w-full overflow-hidden">
    <div className="lg:border-[8px] border-[4px] lg:rounded-[20px] rounded-[12px] border-paragraphText border-opacity-35 backdrop-blur-[67px] w-full h-full overflow-hidden">
      <div className="img w-full h-full overflow-hidden">
        <Image src={portfolio01} className="!h-full !w-full !inline-block" />
      </div>
    </div>
  </div>
</div>;
