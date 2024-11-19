import React from "react";
import Bracump from "../components/Common/Bracump/Bracump";
import TitleStart from "../components/TitleStart";
import ItemHoidap from "../components/ItemHoidap";

const items = [
  {
    text: "Phòng Hành Chính- Tổng Hợp",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 1." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 1." },
    ],
  },
  {
    text: "Phòng Quản trị, vận hành nền tảng số",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
  {
    text: "Phòng Công nghệ số",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
  {
    text: "Phòng tư vấn chuyển đổi số",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
  {
    text: "Phòng Kỹ năng số",
    content: [
      { noidung: "Trả lời 1: Đây là nội dung cho câu hỏi 2." },
      { noidung: "Trả lời 2: Thêm thông tin cho câu hỏi 2." },
    ],
  },
];
export default function Tochuc() {
  return (
    <div>
      <Bracump titlepage={"tổ chức"} text={"Trang chủ"}></Bracump>
      <TitleStart title={"TỔ CHỨC"} />
      <div className="my-5 container flex flex-col gap-1">
        {items.map((item, index) => (
          <ItemHoidap key={index} text={item.text} content={item.content} />
        ))}
      </div>
    </div>
  );
}
