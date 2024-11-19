import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function HowItwork() {
  const [learnmore, showLearnmore] = useState(false);

  return (
    <Container className="my-24">
      <h3 className="font-bold font-black text-3xl  mt-3 text-center">
        Chức năng, nhiệm vụ và <br /> quyền hạn của Trung tâm.
      </h3>
      <Row className="flex flex-col-reverse lg:flex-row">
        <Col>
          <h4 className="text-2xl font-bold my-1 ">Chức năng của Trung tâm </h4>
          <div className="my-3 text-md">
            Find out everything you need to know and more about how we create
            our business process models.
          </div>
          <p>
            Trung tâm Tư vấn nghiệp vụ và hỗ trợ đánh giá hiệu quả đầu tư công
            nghệ thông tin có chức năng nghiên cứu, xây dựng và triển khai các
            đề án, chương trình thúc đẩy phát triển nghiệp vụ đầu tư trong lĩnh
            vực ứng dụng công nghệ thông tin; Tư vấn trong các giai đoạn của quá
            trình đầu tư ứng dụng, phát triển công nghệ thông tin và hỗ trợ đánh
            giá hiệu quả đầu tư ứng dụng công nghệ thông tin.
          </p>
          <h4 className="text-2xl font-bold my-1 ">
            Nhiệm vụ và quyền hạn của trung tâm
          </h4>
          <div className="my-3 text-md">
            Thực hiện nhiệm vụ phục vụ quản lý nhà nước:
          </div>
          <p className="my-2">
            Tổ chức xây dựng, quản lý, vận hành Hệ thống giám sát, đo lường mức
            độ cung cấp và sử dụng dịch vụ Chính phủ số; Nền tảng khảo sát, thu
            nhập ý kiến người dân; Nền tảng tích hợp, chia sẻ dữ liệu quốc gia;
            Cổng dữ liệu quốc gia và các nền tảng số khác theo sự phân công của
            Cục Trưởng; .
          </p>
          <p className="my-2">
            Tổ chức kiểm tra, đánh giá, công bố các sản phẩm, dịch vụ, nền tảng
            số Việt Nam đáp ứng yêu cầu kỹ thuật theo sự phân công của Cục
            trưởng, đảm bảo đúng qui định của pháp luật;{" "}
          </p>
          <p className="my-2">
            Nghiên cứu thử, thử nghiệm, phát triển, chuyển giao và triển khai
            các công nghệ số, nền tảng số đúng đảm bảo đúng qui định của pháp
            luật;
          </p>
          <p className="my-2">
            Nghiên cứu, đề xuất và tham gia xây dựng các cơ chế, chính sách, văn
            bản quy phạm pháp luật thuốc lĩnh vực được giao theo phân công của
            Cục Trưởng
          </p>
          <p className="my-2">
            Nghiên cứu, đề xuất giải pháp thúc đẩy phát triển, sử dụng các nền
            tảng số, công nghệ số; tổ chức tuyên truyền, phổ biến, giáo dục pháp
            luật, tập huấn, bồi dưỡng trong lĩnh vực công nghệ số theo sự phân
            công của Cục trưởng;
          </p>

          {learnmore && (
            <>
              <p className="my-2">
                Tham gia đề xuất, xây dựng, tổ chức thực hiện các tiêu chuẩn,
                quy chuẩn, chức năng, tính năng kỹ thuật, định mức kinh tế-kỹ
                thuật về công nghệ số theo phân công của Cục Trưởng
              </p>
              <div className="my-3 text-md">
                Thực hiện nhiệm vụ cung cấp dịch vụ sự nghiệp công:
              </div>
              <p className="my-2">
                Đo lường, đánh giá việc cung cấp và sử dụng thông tin điện tử và
                dịch vụ công trực tuyến theo quy định
              </p>
              <p className="my-2">
                Đánh giá kỹ thuật về kết nối các hệ thống thông tin, cơ sở dữ
                liệu của các bộ, cơ quan ngang bộ, cơ quan Chính phủ, các tỉnh,
                thành phố trực thuộc trung ương với Cơ sở dữ liệu quốc gia theo
                phân công của Cục trưởng, dảm bảo đúng quy định của pháp luật;{" "}
              </p>
              <div className="my-3 text-md">
                Thực hiện nhiệm vụ quản trị nội bộ và phát triển đơn vị:
              </div>
              <p className="my-2">
                Cung cấp các dịch vụ tư vấn tuyên truyền, bồi dưỡng, hội nghị,
                hội thảo, tọa đàm; cung cấp các dịch vụ về công nghệ thông tin,
                an toàn thông tin, quản lý đầu tư, chuyển đổi số, công nghệ số,
                nền tảng số và các dịch vụ khác phù hợp với chức năng, nhiệm vụ
                của Trung tâm theo quy định của pháp luật; bảo toàn và phát
                triển nguồn lực được giao
              </p>
              <p className="my-2">
                {" "}
                Tổ chức xúc tiến đầu tư, hợp tác quốc tế; thực hiện liên danh,
                liên kết với các tổ chức, cá nhân để thúc đẩy phát triển và
                triển khai công nghệ số, nền tảng số theo quy định của pháp luật{" "}
              </p>
            </>
          )}

          <div className="my-5 ">
            <button
              href=""
              className="bg-[#3F78E0] text-white font-medium px-4 py-2 rounded-full "
              onClick={() => showLearnmore(!learnmore)}
            >
              Xem Thêm
            </button>
          </div>
        </Col>
        <Col className="flex flex-col gap-3 my-5">
          <div className="text-2xl font-bold my-1  hidden lg:block">
            TỔ CHỨC BỘ MÁY
          </div>
          <div className="flex flex-col my-5 lg:block">
            <div
              className="bg-white p-3 d-flex items-center gap-3 "
              style={{ border: "1px solid #ccc" }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-400 text-center content-center font-bold">
                01
              </div>
              <div>
                <h3 className="font-bold text-blue-500">
                  Phòng hành chính - Tổng hợp
                </h3>
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
                <h3 className="font-bold">Phòng Công nghệ số</h3>
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
                <h3 className="font-bold">
                  Phòng Quản trị, vận hành nền tảng số
                </h3>
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
                <h3 className="font-bold">Phòng Tư vấn chuyển đổi số</h3>
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
                <h3 className="font-bold">Phòng Kỹ năng số</h3>
                <div className="my-3">Chi tiết</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
