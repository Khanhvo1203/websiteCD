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
                <Image src="/public/co1.png" className="img-fluid" />
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
                  “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Vestibulum ligula porta felis euismod semper.
                  Cras justo odio consectetur nulla dapibus curabitur blandit.”
                  <h3 className="text-xl mt-4">Anh da đen</h3>
                  <h4 className="text-lg font-thin">Chuyên gia tư vấn</h4>
                </SwiperSlide>
                <SwiperSlide className="text-2xl">
                  “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Vestibulum ligula porta felis euismod semper.
                  Cras justo odio consectetur nulla dapibus curabitur blandit.”
                  <h3 className="text-xl mt-4">Anh da đen</h3>
                  <h4 className="text-lg font-thin">Chuyên gia tư vấn</h4>
                </SwiperSlide>
                <SwiperSlide className="text-2xl">
                  “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Vestibulum ligula porta felis euismod semper.
                  Cras justo odio consectetur nulla dapibus curabitur blandit.”
                  <h3 className="text-xl mt-4">Anh da đen</h3>
                  <h4 className="text-lg font-thin">Chuyên gia tư vấn</h4>
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
