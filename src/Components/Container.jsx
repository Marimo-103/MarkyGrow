import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-[1440px] mx-auto 2xl:px-[80px] xl:px-[20px] lg:px-4 md:px-4 px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
