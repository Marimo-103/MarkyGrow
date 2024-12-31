import React from "react";
import Container from "./Container";
import Title from "../Layers/Title";
import Button from "../Layers/Button";
import { FaArrowRight } from "react-icons/fa";
import Input from "../Layers/Input";

const Contact = () => {
  return (
    <section id="contact" className="lg:py-[135px] md:py-20 py-14">
      <Container>
        <Title
          text="Get in touch"
          className="text-headingText text-center lg:mb-10 mb-6"
        />
        <div className="form lg:w-[730px] bg-gradient-to-b from-GradBackground01 to-GradBackground02 md:w-[550px] w-full py-12 mx-auto border md:rounded-[20px] rounded-xl">
          <Title
            text="Send us a Message!"
            className="text-whiteText text-center lg:mb-10 md:mb-8 mb-5"
          />
          <div className="flex flex-col items-center justify-center lg:gap-y-8 md:gap-y-6 gap-y-4">
            <Input label="Name" placeholder="Your name" inputType="text" />
            <Input label="Email" placeholder="Your Email" inputType="mail" />
            <div className="input flex flex-col gap-2 lg:w-[500px] md:w-[380px] w-[300px]">
              <label htmlFor="" className="text-white lg:text-lg text-base ">
                Your message
              </label>
              <textarea
                type='text'
                placeholder='Type your message here...'
                className="lg:p-4 md:p-3 p-2 md:rounded-lg rounded-md outline-none bg-transparent duration-300 border border-[rgba(255,255,255,0.3)] focus:border-whiteText text-whiteText"
              ></textarea>
            </div>
            <Button className="hover:text-buttonTextHover w-[300px] lg:w-[500px] md:w-[380px]">
              Send Message
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
