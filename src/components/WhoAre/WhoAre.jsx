import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { BsMegaphone } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

export default function WhoAre() {
  return (
    <Container className="py-12">
      <Row className="gap-8">
        <Col>
          <BsMegaphone className="my-3 text-3xl text-blue-500" />
          <h1 className="text-2xl font-bold my-1 ">
            Trung Tâm Công Nghệ Số Quốc gia là gì?
          </h1>
          <h5 className="tracking-tighter text-[#60697b] my-4">
            Trung tâm Công nghệ số quốc gia là đơn vị sự nghiệp công lập trực
            thuộc Cục Chuyển đổi số quốc gia, có chức năng giúp Cục trưởng
            nghiên cứu, thúc đẩy phát triển, sử dụng công nghệ số, nền tảng số
            trong hoạt động của cơ quan nhà nước và cung cấp dịch vụ sự nghiệp
            công thuộc phạm vi quản lý của Cục theo quy định pháp luật.
          </h5>
          <h5 className="my-4 text-[#60697b] ">
            Trung tâm Công nghệ số quốc gia có tư cách pháp nhân, có con dấu và
            tài khoản riêng để giao dịch theo quy định của pháp luật; có trụ sở
            chính đặt tại thành phố Hà Nội.
          </h5>
          <Row className="gap-3">
            <Col>
              <div className="d-flex gap-3 items-center ">
                <TiTick
                  width={30}
                  height={30}
                  className="bg-blue-300 text-blue-600 rounded-full"
                />
                Thực hiện nhiệm vụ phục vụ quản lý nhà nước.
              </div>
              <div className="d-flex gap-3 items-center ">
                <TiTick
                  width={30}
                  height={40}
                  className="bg-blue-300 text-blue-600 rounded-full"
                />
                Thực hiện nhiệm vụ cung cấp dịch vụ sự nghiệp công.
              </div>
            </Col>
            <Col>
              <div className="d-flex gap-3 items-center ">
                <TiTick
                  width={5}
                  height={5}
                  className="bg-blue-300 text-blue-600 rounded-full"
                />
                Thực hiện nhiệm vụ quản trị nội bộ và phát triển đơn vị.
              </div>
              <div className="d-flex gap-3 items-center ">
                <TiTick
                  width={5}
                  height={5}
                  className="bg-blue-300 text-blue-600 rounded-full"
                />
                Quản trị Công Nghệ Thông Tin.
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="relative">
          <Image
            src="/bg11.jpg"
            width={333}
            className="absolute left-0  z-10 "
            style={{ bottom: "-4rem" }}
          />
          <Image src="/about2.jpg" width={427} className="absolute right-0 " />
        </Col>
      </Row>
    </Container>
  );
}
