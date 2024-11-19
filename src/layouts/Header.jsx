import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { BsArrowRight, BsList } from "react-icons/bs"; // Import menu icon

export default function Header() {
  const itemmenu = [
    { text: "Services", icon: <BsArrowRight /> },
    { text: "Products", icon: <BsArrowRight /> },
  ];

  return (
    <div>
      <Container fluid className="bg-[#F6F7F9]">
        <Container className="py-3">
          <Navbar expand="lg" className="gap-5 items-center">
            {/* Logo and Title */}
            <Navbar.Brand className="d-flex align-items-center">
              <Image
                src="/LogoTT1.jpg"
                style={{
                  width: "80px",
                  height: "auto",
                  backgroundColor: "#F6F7F9",
                }}
              />
            </Navbar.Brand>

            {/* Title (Hidden on mobile) */}
            <h1 className="text-[1.3rem] hidden lg:block">
              CỔNG THÔNG TIN ĐIỆN TỬ <br />
              TRUNG TÂM CÔNG NGHỆ SỐ QUỐC GIA
            </h1>

            {/* Toggle Button for Mobile */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0"
            >
              <BsList size={30} />
            </Navbar.Toggle>

            {/* Collapsible Nav Menu */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="gap-[1.7rem] items-center ">
                <Nav.Item className="font-medium">Trang Chủ</Nav.Item>
                <Nav.Link href="/tochuc" className="font-medium">
                  Tổ chức
                </Nav.Link>
                <Nav.Link href="/hoidap" className="font-medium">
                  Hỏi Đáp
                </Nav.Link>
                <Nav.Link className="font-medium">Chức Năng</Nav.Link>
                <Nav.Link href="/lienhe" className="font-medium">
                  Liên Hệ
                </Nav.Link>
                <Nav.Link className="font-medium">Tư vấn</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
}
