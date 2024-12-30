import React from "react";

const ParagraphText = ({className, text}) => {
  return (
    <p className={`lg:text-base text-sm text-paragraphText font-medium leading-[180%] ${className}`}>
      {text}
    </p>
  );
};

export default ParagraphText;
