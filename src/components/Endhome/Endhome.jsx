import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Endhome() {
  return (
    <div>
      <Container fluid className="bg-blue-100 py-32 cut-background3">
        <Container>
          <Row className="px-7 justify-center gap-8 cuttom flex-col lg:flex-row ">
            <Col>
              <div className="d-flex items-start flex-col lg:flex-row gap-3">
                <img
                  src="/LogoTT.jpg"
                  alt="Logo"
                  style={{
                    width: "104px",
                    height: "auto",
                    marginRight: "10px",
                  }}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-black text-[1.5rem]">
                    CỔNG THÔNG TIN ĐIỆN TỬ TRUNG TÂM CHUYỂN ĐỔI SỐ QUỐC GIA
                  </h3>
                  <h4 className="text-black text-sm">
                    Cơ quan thường trực: Văn phòng Ủy ban Quốc gia về chuyển đổi
                    số
                  </h4>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <h3 className="text-black text-[1.5rem]">LIÊN HỆ</h3>
                <h4 className="text-black text-sm">
                  Địa chỉ: Tòa nhà VNTA, 68 Dương Đình Nghệ, Cầu Giấy, thành phố
                  Hà Nội
                </h4>
                <h4 className="text-black text-sm">
                  Số điện thoại: 024 3782 1766
                </h4>
                <h4 className="text-black text-sm">
                  Email: ubqg.cds@mic.gov.vn
                </h4>
              </div>
            </Col>
            <Col>
              <div>
                <h3 className="text-black">Tìm kiếm</h3>
                <h4 className="text-black text-sm">Hoạt động </h4>
                <h4 className="text-black text-sm">Hỗ trợ</h4>
                <h4 className="text-black text-sm">Hỏi đáp</h4>
                <h4 className="text-black text-sm">Chức Năng</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
