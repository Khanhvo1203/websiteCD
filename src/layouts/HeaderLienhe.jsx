import React from "react";
import {
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import DropdownComp from "../components/DropdownComp";
import { BsArrowRight } from "react-icons/bs";
import Bracump from "../components/Common/Bracump/Bracump";
import { FaLocationDot, FaVoicemail } from "react-icons/fa6";
import { FaFileMedicalAlt, FaMailBulk, FaPhone } from "react-icons/fa";

export default function HeaderLienhe() {
  const itemmenu = [
    { text: "Services", icon: <BsArrowRight /> },
    { text: "Products", icon: <BsArrowRight /> },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("/bg3.jpg")',
      }}
      className="h-[552px] relative "
    >
      <Bracump
        className={"bg-none absolute top-[8rem]"}
        text={"Get in Touch"}
        titlepage={"Contact"}
        noBackground
      />
      <div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 flex shadow-md">
        <div className="rounded-tl-md rounded-bl-md object-cover max-w-[535px]">
          <img src="/toanhavnta.png" alt="" />
        </div>
        <div className="p-6 bg-white">
          <div className="flex gap-3">
            <FaLocationDot className="text-blue-500 text-2xl" />
            <div>
              <p className="font-bold mb-2 text-xl">Address</p>
              <p>68 Dương Đình Nghệ, quận Cầu giấy,Hà Nội</p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaPhone className="text-blue-500 text-2xl" />
            <div>
              <p className="font-bold mb-2 text-xl">Phone</p>
              <p>+012 345 6789</p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaMailBulk className="text-blue-500 text-2xl" />
            <div>
              <p className="font-bold mb-2 text-xl">Email</p>
              <p>trungtamchuyendoiso@gov.com.vn</p>
            </div>
          </div>
        </div>
      </div>
      <Container fluid className="">
        <Container className="py-3">
          <Navbar className=" justify-content-between items-center">
            <div className="d-flex align-items-center   ">
              <Navbar.Brand>
                <Image
                  src="/LogoTT1.jpg"
                  style={{
                    width: "80px",
                    height: "auto",

                    backgroundColor: "#F6F7F9",
                  }}
                />
              </Navbar.Brand>
              <h1 className="text-[1.3rem] text-white ">
                CỔNG THÔNG TIN ĐIỆN TỬ <br />
                TRUNG TÂM CÔNG NGHỆ SỐ QUỐC GIA
              </h1>
            </div>

            <Nav className="gap-[1.7rem]  items-center">
              <Nav.Item className="font-medium text-white">Trang Chủ</Nav.Item>

              <Nav.Link href="/tochuc" className="font-medium text-white">
                Tổ chức{" "}
              </Nav.Link>

              <Nav.Link href="/hoidap" className="font-medium text-white">
                Hỏi Đáp
              </Nav.Link>

              <Nav.Link className="font-medium text-white">Chức Năng</Nav.Link>

              <Nav.Link href="/lienhe" className="font-medium text-white">
                Liên Hệ
              </Nav.Link>

              <Nav.Link className="font-medium text-white">Tư vấn</Nav.Link>
            </Nav>
            <Nav className="gap-4 items-center text-white"> </Nav>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
}
