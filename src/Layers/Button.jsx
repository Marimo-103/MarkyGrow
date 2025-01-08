import React from "react";

const Button = ({ className, children, href, type, value }) => {
  return (
    <a href={href}>
      <button
      type={type}
      value={value}
        className={`lg:px-8 lg:py-4 px-6 py-3 flex items-center justify-center gap-[42px] rounded-full border border-button hover:bg-transparent transition-all duration-300 bg-button text-buttonText md:text-base text-sm lg:font-bold font-semibold leading-[140%] dark:duration-300 ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
