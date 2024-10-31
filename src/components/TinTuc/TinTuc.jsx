import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function TinTuc() {
  return (
    <div className="container-fuild my-10 py-6">
      <div className="bg-gradient-to-r from-slate-500 to-black px-4 py-6">
        <div className="text-3xl flex gap-1 justify-center">
          <p className="to-orange-300 ">Tin Tức</p>{" "}
          <p className="font-bold text-white">Hoạt Động</p>
        </div>
        <div className="flex items-center gap-4 justify-center my-2">
          <div className="shadow-md rounded-md w-[366px] bg-white">
            <div className="p-0">
              <img
                src="http://localhost:5173/public/bg11.jpg"
                alt=""
                className="w-[366px] object-cover"
              />
            </div>
            <div className="px-3">
              <div className="flex gap-3 items-center">
                <h5 className="text-orange-400 text-3xl ">
                  21
                  <div className="h-1 w-full bg-orange-400"></div>
                </h5>
                <p className="m-0">08/2024</p>
              </div>
              <div className="font-bold my-2">
                Đa dạng các hoạt động, sự kiện nhằm thúc đẩy chuyển đổi số thông
                qua Tuần lễ Chuyển đổi số
              </div>
              <p className="text-[#1a1a1a] ">
                Tuần lễ Chuyển đổi số - Huế 2022 được tỉnh tổ chức nhằm xây dựng
                chiến lược chuyển đổi số trong giai đoạn mới của Thừa Thiên Huế
                nhằm phát huy sức mạnh Văn hóa - Di sản, tạo ra những dịch vụ
                mới, các mô hình kinh tế mới cho Thừa Thiên Huế.
              </p>
              <div className="flex gap-3 items-center">
                <a
                  href=""
                  className="font-bold text-black my-3 hover:text-orange-400"
                >
                  xem chi tiết
                </a>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md w-[366px] bg-white">
            <div className="p-0">
              <img
                src="http://localhost:5173/public/bg11.jpg"
                alt=""
                className="w-[366px] object-cover"
              />
            </div>
            <div className="px-3">
              <div className="flex gap-3 items-center">
                <h5 className="text-orange-400 text-3xl ">
                  21
                  <div className="h-1 w-full bg-orange-400"></div>
                </h5>
                <p className="m-0">08/2024</p>
              </div>
              <div className="font-bold my-2">
                Đa dạng các hoạt động, sự kiện nhằm thúc đẩy chuyển đổi số thông
                qua Tuần lễ Chuyển đổi số
              </div>
              <p className="text-[#1a1a1a] ">
                Tuần lễ Chuyển đổi số - Huế 2022 được tỉnh tổ chức nhằm xây dựng
                chiến lược chuyển đổi số trong giai đoạn mới của Thừa Thiên Huế
                nhằm phát huy sức mạnh Văn hóa - Di sản, tạo ra những dịch vụ
                mới, các mô hình kinh tế mới cho Thừa Thiên Huế.
              </p>
              <div className="flex gap-3 items-center">
                <a
                  href=""
                  className="font-bold text-black my-3 hover:text-orange-400"
                >
                  xem chi tiết
                </a>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md w-[366px] bg-white">
            <div className="p-0">
              <img
                src="http://localhost:5173/public/bg11.jpg"
                alt=""
                className="w-[366px] object-cover"
              />
            </div>
            <div className="px-3">
              <div className="flex gap-3 items-center">
                <h5 className="text-orange-400 text-3xl ">
                  21
                  <div className="h-1 w-full bg-orange-400"></div>
                </h5>
                <p className="m-0">08/2024</p>
              </div>
              <div className="font-bold my-2">
                Đa dạng các hoạt động, sự kiện nhằm thúc đẩy chuyển đổi số thông
                qua Tuần lễ Chuyển đổi số
              </div>
              <p className="text-[#1a1a1a] ">
                Tuần lễ Chuyển đổi số - Huế 2022 được tỉnh tổ chức nhằm xây dựng
                chiến lược chuyển đổi số trong giai đoạn mới của Thừa Thiên Huế
                nhằm phát huy sức mạnh Văn hóa - Di sản, tạo ra những dịch vụ
                mới, các mô hình kinh tế mới cho Thừa Thiên Huế.
              </p>
              <div className="flex gap-3 items-center">
                <a
                  href=""
                  className="font-bold text-black my-3 hover:text-orange-400"
                >
                  xem chi tiết
                </a>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <a
            href=" "
            className="text-white px-3 py-2 uppercase bg-orange-400  relative "
          >
            <div className="absolute top-[-5px] left-[-5px]  border-t-2 border-l-2 w-4 h-4"></div>
            <div className="absolute bottom-[-5px] right-[-5px]  border-b-2 border-r-2 w-4 h-4"></div>
            xem tất cả
          </a>
        </div>
      </div>
    </div>
  );
}
