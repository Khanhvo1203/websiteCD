import React from "react";
import { Col, Container, Image, Row, Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Nigga() {
  return (
    <div>
      <Container fluid className="bg-[#EDF2FC] cut-background1">
        <Container className="pt-6">
          <Row className="gap-3 d-flex items-center">
            <Col>
              <div className=" justify-content-center mx-6 mt-10">
                <Image src="/public/hinhnen.webp" className="img-fluid" />
              </div>
            </Col>
            <Col md={6} className="">
              <Swiper
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="text-2xl">
                  “Chuyển đổi số là một sự thay đổi về chất, là phương thức phát
                  triển mới của đất nước, đưa Việt Nam phát triển nhanh và bền
                  vững, đồng thời tạo ra một động lực để Việt Nam trở thành quốc
                  gia phát triển.”
                  <h3 className="text-xl mt-4">Nguyễn Mạnh Hùng</h3>
                  <h4 className="text-lg font-thin">
                    {" "}
                    Bộ trưởng Bộ Thông tin và Truyền thông
                  </h4>
                </SwiperSlide>

                <div className="swiper-pagination"></div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
