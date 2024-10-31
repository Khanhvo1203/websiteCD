import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function HowItwork() {
  return (
    <Container className="my-24">
      <h3 className="font-bold font-black text-3xl  mt-3 text-center">
        Here are 3 working steps to <br /> organize our business projects.
      </h3>
      <Row>
        <Col>
          <h4 className="font-black text-xl ">How It Works?</h4>
          <div className="my-3 text-md">
            Find out everything you need to know and more about how we create
            our business process models.
          </div>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis ornare.
          </p>
          <p className="my-2">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis ornare.
          </p>
          <div className="my-5 ">
            <a
              href=""
              className="bg-[#3F78E0] text-white font-medium px-4 py-2 rounded-full "
            >
              Learn More
            </a>
          </div>
        </Col>
        <Col>
          <div
            className="bg-white p-3 d-flex items-center gap-3"
            style={{ border: "1px solid #ccc" }}
          >
            <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-400 text-center content-center font-bold">
              01
            </div>
            <div>
              <h3 className="font-bold">Colect Ideas</h3>
              <div className="my-3">
                Nulla vitae elit libero pharetra augue dapibus.
              </div>
            </div>
          </div>
          <div
            className="bg-white p-3 d-flex items-center gap-3"
            style={{ border: "1px solid #ccc" }}
          >
            <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-400 text-center content-center font-bold">
              01
            </div>
            <div>
              <h3 className="font-bold">Colect Ideas</h3>
              <div className="my-3">
                Nulla vitae elit libero pharetra augue dapibus.
              </div>
            </div>
          </div>
          <div
            className="bg-white p-3 d-flex items-center gap-3"
            style={{ border: "1px solid #ccc" }}
          >
            <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-400 text-center content-center font-bold">
              01
            </div>
            <div>
              <h3 className="font-bold">Colect Ideas</h3>
              <div className="my-3">
                Nulla vitae elit libero pharetra augue dapibus.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
