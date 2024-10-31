import React from "react";
import { Card, CardBody, Carousel, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselCompo() {
  const carouitem = [
    {
      img: "/public/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/public/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/public/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/public/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/public/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
  ];
  return (
    <Container fluid>
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="mx-5"
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {carouitem.map((item) => {
          return (
            <SwiperSlide className="">
              <Card>
                <CardBody>
                  <img src={item.img} alt="" className="rounded-full" />
                  <p className="font-bold text-2xl my-2">{item.title}</p>
                  <p className="font-light text-xl mb-2">{item.name}</p>
                  <p className="text-xl mb-2">{item.des}</p>
                </CardBody>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
