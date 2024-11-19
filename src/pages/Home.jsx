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
        <div className="cut-bac">
          <Image
            src="/public/Trangtrungtam.png"
            width={1865} /* Chiều rộng cụ thể */
            height={1080} /* Chiều cao cụ thể */
            objectFit="cover" /* Giữ tỷ lệ của ảnh */
            alt="Ảnh Trung Tâm Chuyển Đổi Số"
          />
        </div>

        <h1 className=" font-bold text-3xxl text-center hidden lg:block">
          Trung Tâm Chuyển Đổi Số
        </h1>
        <WhoAre />
        <HowItwork />
        <Nigga />
        <Yourtime />
      </Container>

      <Convinced />
      <ScrollToTop />

      <Endhome />
    </div>
  );
}
