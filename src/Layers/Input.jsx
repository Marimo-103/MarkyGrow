import React from "react";

const Input = ({ label, placeholder, inputType, Name }) => {
  return (
    <div className="input flex flex-col gap-2 lg:w-[500px] md:w-[380px] w-[300px]">
      <label htmlFor={Name} className="text-white dark:text-BgDark dark:duration-300 duration-300 lg:text-lg text-base ">
        {label}
      </label>
      <input
        name={Name}
        type={inputType}
        placeholder={placeholder}
        className="lg:p-4 md:p-3 p-2 md:rounded-lg rounded-md outline-none bg-transparent duration-300 border border-[rgba(255,255,255,0.3)] dark:border-[#24104b39] dark:focus:border-[#24104bbc] focus:border-whiteText text-whiteText dark:text-BgDark dark:duration-300"
      />
    </div>
  );
};

export default Input;
