import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="lg:w-[350px] lg:h-[350px] md:w-[230px] md:h-[230px] w-[150px] h-[150px]">
          <div className="lg:p-5 md:p-5 p-3  h-full w-full">
            <div className="lg:border-[8px] border-[4px] lg:rounded-[20px] rounded-[12px] border-paragraphText border-opacity-35 backdrop-blur-[67px] w-full h-full">
              <div className="img">
                jhvjgvj
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[350px] lg:h-[350px] md:w-[230px] md:h-[230px] w-[150px] h-[150px]">
          <div className="lg:p-5 md:p-5 p-3  h-full w-full">
            <div className="lg:border-[8px] border-[4px] lg:rounded-[20px] rounded-[12px] border-paragraphText border-opacity-35 backdrop-blur-[67px] w-full h-full">
              <div className="img">
                jhvjgvj
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[350px] lg:h-[350px] md:w-[230px] md:h-[230px] w-[150px] h-[150px]">
          <div className="lg:p-5 md:p-5 p-3  h-full w-full">
            <div className="lg:border-[8px] border-[4px] lg:rounded-[20px] rounded-[12px] border-paragraphText border-opacity-35 backdrop-blur-[67px] w-full h-full">
              <div className="img">
                jhvjgvj
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[350px] lg:h-[350px] md:w-[230px] md:h-[230px] w-[150px] h-[150px]">
          <div className="lg:p-5 md:p-5 p-3  h-full w-full">
            <div className="lg:border-[8px] border-[4px] lg:rounded-[20px] rounded-[12px] border-paragraphText border-opacity-35 backdrop-blur-[67px] w-full h-full">
              <div className="img">
                jhvjgvj
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default PortfolioSlider;
