import React from "react";
import { BiArrowFromRight } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Bracump({ text, titlepage, className, noBackground }) {
  return (
    <div
      className={`container-fluid py-16 ${className}`}
      style={{
        backgroundImage: noBackground ? "none" : `url("./hoidap.jpg")`,
      }}
    >
      <div className="max-w mx-auto  ">
        <div className="text-2xl mb-3 text-white text-center">{text}</div>
        <div className="flex items-center justify-center  gap-2">
          <span className="text-orange-400">Trang chủ</span>
          <MdKeyboardDoubleArrowRight style={{ color: "white" }} />

          <span className="text-white">{titlepage}</span>
        </div>
      </div>
    </div>
  );
}
