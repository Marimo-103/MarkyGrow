import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-[1440px] mx-auto lg:px-[80px] md:px-4 px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
