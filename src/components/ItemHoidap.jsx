import React, { useState, useRef } from "react";
import { BiPlus } from "react-icons/bi";

export default function ItemHoidap({ text, content }) {
  const [shownoidung, setShownoidung] = useState(false);
  const contentRef = useRef(null); // Dùng để lấy chiều cao thật của nội dung

  const handleShow = () => {
    setShownoidung((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={handleShow}
        className="p-3 flex justify-between items-center bg-blue-200 cursor-pointer transition-all duration-300"
      >
        <p className="font-medium text-gray-700 m-0">{text}</p>
        <div>
          <BiPlus className="text-xl" />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300`}
        style={{
          maxHeight: shownoidung
            ? `${contentRef.current.scrollHeight}px`
            : "0px",
        }}
      >
        <div className="p-3 bg-white text-sm">
          {content.map((item, index) => (
            <div key={index}>{item.noidung}</div>
          ))}
        </div>
      </div>
    </>
  );
}
