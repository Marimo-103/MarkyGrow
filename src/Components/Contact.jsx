import React, { useRef } from "react";
import Container from "./Container";
import Title from "../Layers/Title";
import Button from "../Layers/Button";
import { FaArrowRight } from "react-icons/fa";
import Input from "../Layers/Input";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ztjihl7", "template_h1hikm5", form.current, {
        publicKey: "if8gJk-yEe7W1r6hW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center justify-center lg:gap-y-8 md:gap-y-6 gap-y-4"
          >
            <Input
              Name="from_name"
              label="Name"
              placeholder="Your name"
              inputType="text"
            />
            <Input
              Name="from_name"
              label="Email"
              placeholder="Your Email"
              inputType="mail"
            />
            <div className="input flex flex-col gap-2 lg:w-[500px] md:w-[380px] w-[300px]">
              <label htmlFor="message" className="text-white lg:text-lg text-base ">
                Your message
              </label>
              <textarea
                name="message"
                type="text"
                placeholder="Type your message here..."
                className="lg:p-4 md:p-3 p-2 md:rounded-lg rounded-md outline-none bg-transparent duration-300 border border-[rgba(255,255,255,0.3)] focus:border-whiteText text-whiteText"
              ></textarea>
            </div>
            <Button
              type="submit"
              value="Send"
              className="hover:text-buttonTextHover w-[300px] lg:w-[500px] md:w-[380px]"
            >
              Send Message
              <FaArrowRight />
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
