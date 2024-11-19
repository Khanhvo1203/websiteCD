import React from "react";
import Bracump from "../components/Common/Bracump/Bracump";
import TitleStart from "../components/TitleStart";
import ItemHoidap from "../components/ItemHoidap";

const items = [
  {
    text: "Câu hỏi 1",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 1." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 1." },
    ],
  },
  {
    text: "Câu hỏi 2",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
  {
    text: "Câu hỏi 2",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
  {
    text: "Câu hỏi 2",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
  {
    text: "Câu hỏi 2",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
];
export default function Hoidap() {
  return (
    <div>
      <Bracump text={"Trang chủ"} titlepage={"Hỏi đáp"}></Bracump>
      <TitleStart title={"Hỏi đáp"} />
      <div className="my-5 container flex flex-col transition-all duration-300 gap-1">
        {items.map((item, index) => (
          <ItemHoidap key={index} text={item.text} content={item.content} />
        ))}
      </div>
    </div>
  );
}
