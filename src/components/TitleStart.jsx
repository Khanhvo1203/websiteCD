import React from "react";

export default function TitleStart({ title }) {
  return (
    <div className="flex items-center gap-1 justify-center my-3">
      <div>
        <div className="h-1 mb-2 w-10 bg-yellow-500"></div>
        <div className="h-1 w-5 bg-yellow-500 ml-5"></div>
      </div>
      <p className="text-4xl font-medium uppercase"> {title}</p>
      <div>
        <div className="h-1 mb-2 w-10 bg-yellow-500"></div>
        <div className="h-1 w-5 bg-yellow-500"></div>
      </div>
    </div>
  );
}
