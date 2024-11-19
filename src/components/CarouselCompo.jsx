import React from "react";
import { Card, CardBody, Carousel, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselCompo() {
  const carouitem = [
    {
      img: "/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/daden.jpg",
      title: "Coriss Ambady",
      name: "Chuyên gia tư vấn",
      des: "Fermentum massa justo sit amet risus morbi",
    },
    {
      img: "/daden.jpg",
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
        className="lg:mx-5 mx-0"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 slides when screen width is 640px and above (sm breakpoint)
          },
          768: {
            slidesPerView: 3, // Show 3 slides when screen width is 768px and above (md breakpoint)
          },
          1024: {
            slidesPerView: 4, // Show 4 slides when screen width is 1024px and above (lg breakpoint)
          },
        }}
      >
        {carouitem.map((item) => {
          return (
            <SwiperSlide className="">
              <Card className="">
                <CardBody>
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-full w-[200px] h-[200px]"
                  />
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
