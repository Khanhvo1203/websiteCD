import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { BsTelephoneForward } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export default function Convinced() {
  return (
    <Container fluid className="items-center relative py-14">
      <Container>
        <Row className=" gap-5">
          <Col>
            <div className="relative">
              <img
                className="w-[440px] h-[250px] object-cover rounded-sm absolute left-24"
                src="/anhnen.jpg"
                alt=""
              />
              <img
                className="w-[496px] h-[400px] object-cover rounded-lg absolute right-0 top-24"
                src="/dia chi trung tam.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div>
              <BsTelephoneForward className="font-semibold text-3xl to-blue-600 mb-4" />
            </div>
            <h3 className="from-black font-semibold text-4xl mb-8">
              Convinced yet? Let's make something great together.
            </h3>
            <div className="flex gap-4 items-center  my-3">
              <div>
                <BiLocationPlus className="font-medium text-xl text-blue-600" />
              </div>
              <div className="">
                <h5 className="from-black font-semibold mb-1">Address</h5>
                <p className="p-0 m-0 ">
                  68 Phố Dương Đình Nghệ,Quận Cầu Giấy,Hà Nội-VN
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center  my-3">
              <div>
                <BiPhoneCall className="font-medium text-xl text-blue-600" />
              </div>
              <div>
                <h5 className="from-black font-semibold mb-1">Phone</h5>
                <p className="p-0 m-0 ">+0 123 456 789</p>
              </div>
            </div>
            <div className="flex gap-4 items-center my-3 ">
              <div>
                <TfiEmail className="font-medium text-xl text-blue-600" />
              </div>
              <div>
                <h5 className="from-black font-semibold mb-1">Email</h5>
                <p className="p-0 m-0 ">trungtamchuyendoiso.gov@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
