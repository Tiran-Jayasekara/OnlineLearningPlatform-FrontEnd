import React from "react";

const PageHeader = ({ topic, header, description }) => {
  return (
    <>
      <div className="flex flex-col bg-blue-600 w-full h-auto mt-10 ">
        <h6 className=" text-white font-playfair text-sm font-bold md:text-xl mt-0 md:ml-10 ml-4 pb-2 py-4 mb-0">
          {topic}
        </h6>
        <h1 className=" text-white font-playfair font-bold text-xl md:text-4xl md:ml-10 ml-4 mr-4 pb-2">
          {header}
        </h1>
        <h6 className=" text-white text-xm md:text-xl md:ml-10 ml-4 pb-4 font-playfair mr-4">
          {description}
        </h6>
      </div>
    </>
  );
};

export default PageHeader;
