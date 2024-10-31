import React from "react";
import { Carousel, Container, Row, Col, Image, Card } from "react-bootstrap";
import CarouselCompo from "../CarouselCompo";

export default function Yourtime() {
  return (
    <div>
      <Container fluid className="bg-light">
        <Container className="bg-[white] py-6 my-3">
          <h3 className="my-3 font-bold text-2xl text-center">
            Save your time and money by choosing our professional team.
          </h3>
          <Row>
            <CarouselCompo />
          </Row>
        </Container>
      </Container>
    </div>
  );
}
