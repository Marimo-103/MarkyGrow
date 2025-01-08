import React from "react";

const Title = ({className, text}) => {
  return (
    <h2 className={`lg:text-5xl text-3xl font-semibold tracking-tight leading-[130%] dark:duration-300 duration-300 ${className}`}>
      {text}
    </h2>
  );
};

export default Title;
