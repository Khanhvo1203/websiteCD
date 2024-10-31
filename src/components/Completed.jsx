import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiAward, BiSolidAward } from "react-icons/bi";
import {
  BsBag,
  BsBagCheck,
  BsFillAwardFill,
  BsPerson,
  BsPersonCheck,
} from "react-icons/bs";
import { CgAwards } from "react-icons/cg";
import { FaAward } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

export default function Completed() {
  return (
    <Container fluid className="bg-[#edf2fc] py-32 relative cut-background">
      <Container>
        <Row className="gap-3">
          <Col className="flex gap-3 flex-col py-2 px-3 items-center">
            <div className="text-6xl ">
              <SiTicktick />
            </div>
            <div className="text-5xl font-black">7518</div>
            <div>Completed Projects</div>
          </Col>
          <Col className="flex gap-3 flex-col py-2 px-3 items-center">
            <div className="text-6xl ">
              <BsPersonCheck />
            </div>
            <div className="text-5xl font-black">7518</div>
            <div>Completed Projects</div>
          </Col>
          <Col className="flex gap-3 flex-col py-2 px-3 items-center">
            <div className="text-6xl ">
              <BsBagCheck />
            </div>
            <div className="text-5xl font-black">7518</div>
            <div>Completed Projects</div>
          </Col>
          <Col className="flex gap-3 flex-col py-2 px-3 items-center">
            <div className="text-6xl ">
              <FaAward />
            </div>
            <div className="text-5xl font-black">7518</div>
            <div>Completed Projects</div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
