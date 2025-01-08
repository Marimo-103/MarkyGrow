import React from "react";

const ParagraphText = ({className, text}) => {
  return (
    <p className={`lg:text-base text-sm text-paragraphText dark:duration-300 duration-300 dark:text-paragraphTextDark font-medium leading-[180%] ${className}`}>
      {text}
    </p>
  );
};

export default ParagraphText;
