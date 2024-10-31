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

export default function Header() {
  const itemmenu = [
    { text: "Services", icon: <BsArrowRight /> },
    { text: "Products", icon: <BsArrowRight /> },
    { text: "Contact", icon: <BsArrowRight /> },
    { text: "About Us", icon: <BsArrowRight /> },
    { text: "Support", icon: <BsArrowRight /> },
    { text: "FAQ", icon: <BsArrowRight /> },
    { text: "Testimonials", icon: <BsArrowRight /> },
    { text: "Blog", icon: <BsArrowRight /> },
    { text: "Careers", icon: <BsArrowRight /> },
    { text: "Privacy Policy", icon: <BsArrowRight /> },
    { text: "Terms of Service", icon: <BsArrowRight /> },
    { text: "Sitemap", icon: <BsArrowRight /> },
    { text: "Help Center", icon: <BsArrowRight /> },
  ];

  return (
    <div>
      <Container fluid className="bg-[#F6F7F9]">
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
              <h1 className="text-[1.1rem] ">
                CỔNG THÔNG TIN ĐIỆN TỬ <br />
                TRUNG TÂM CÔNG NGHỆ SỐ QUỐC GIA
              </h1>
            </div>

            <Nav className="gap-3  ">
              <DropdownComp
                items={[
                  <div className="py-2 px-3">
                    <div>
                      {itemmenu.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => alert(item.text)} // Thêm sự kiện onClick
                          >
                            <p>{item.text}</p>
                            {item.icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>,
                ]}
                title={<span>Trang Chủ</span>}
              />

              <DropdownComp
                items={[
                  <div className="rounded-m p-4 bg-slate-700 grid grid-cols-6  gap-2 w-[1290px]">
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/slide.jpg"
                        className="rounded-md  w-[185px] object-cover"
                        alt=""
                      />
                    </div>
                  </div>,
                ]}
                title={<span>Hoạt Động</span>}
              ></DropdownComp>
              <DropdownComp
                items={[
                  "Phòng Hành chính-Tổng hợp",
                  "Phòng Công nghệ số",
                  "Phòng Quản trị,vận hành nền tảng số",
                  "Phòng tư vấn chuyển đổi số",
                  "Phòng kỹ năng số",
                ]}
                title={<span>Tổ Chức</span>}
              ></DropdownComp>
              <DropdownComp
                items={["Demos", "hello"]}
                title={<span>Tin Tức</span>}
              ></DropdownComp>

              <DropdownComp
                items={["Demos", "hello"]}
                title={<span>Số Liệu</span>}
              ></DropdownComp>

              <DropdownComp
                items={["Demos", "hello"]}
                title={<span>Hỗ Trợ</span>}
              ></DropdownComp>
            </Nav>
            <Nav className="gap-4 items-center ">
              <Nav.Link>
                <DropdownComp
                  items={["Demos", "hello"]}
                  title={"EN"}
                ></DropdownComp>
              </Nav.Link>
              <Nav.Link
                style={{ backgroundColor: "#3F78E0", fontWeight: "bold" }}
                className="px-4 py-3   text-white rounded-full"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
}
