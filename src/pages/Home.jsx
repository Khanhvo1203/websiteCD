import React from "react";
import { Container, Image } from "react-bootstrap";
import WhoAre from "../components/WhoAre/WhoAre";
import HowItwork from "../components/HowItwork/HowItwork";
import Nigga from "../components/Nigga/Nigga";
import Yourtime from "../components/Yourtime/Yourtime";
import Completed from "../components/Completed";
import Convinced from "../components/Convinced";
import Endhome from "../components/Endhome/Endhome";

import Anhnen from "../components/Common/Anhnen/Anhnen";
import "swiper/css";
import ScrollToTop from "../components/Roll/ScrollToTop";
import TinTuc from "../components/TinTuc/TinTuc";
export default function Home() {
  return (
    <div>
      <Container fluid className="p-0">
        <Container fluid className="items-center bg-[#F6F7F9]">
          <div className="text-center">
            <h1 className="text-3xxl">
              Xin chào! Chào mừng bạn đến với trung tâm công nghệ số quốc gia
            </h1>
            <h6 className="m-0">Hello</h6>
          </div>
        </Container>
        <div className="cut-background2">
          <Image src="/bg12.jpg" />
        </div>
        <WhoAre />
        <TinTuc />
        <HowItwork />
        <Nigga />
        <Yourtime />
      </Container>
      <Completed />

      <Convinced />
      <ScrollToTop />

      <Endhome />
    </div>
  );
}
