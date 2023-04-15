import React from 'react';
import HomePng from '../../../assets/images/home-slide2.png';

const SecondSlide = () => {
  return (
    <div className="w-full h-screen bg-[#51A4F4] py-14 flex flex-col justify-center relative">
      <div className="">
        <div className="px-[132px]">
          <span className="text-[#F0F4FD] font-bold text-[120px]">
            Tạo ra thiết kế <br /> cho riêng bạn
          </span>
        </div>
        <div className="mt-6 px-[132px]">
          <span className="font-normal text-2xl text-[#FFFFFF]">Nhiều tính năng và công cụ mới được cập nhật liên tục</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CBD5E0] mt-7" />
      <div className="px-[132px] py-[84px] ">
        <div className="inline-block bg-[#27282C] px-[45px] py-[22px] cursor-pointer">
          <span className="font-bold text-2xl uppercase text-[#FAFAFA] ">Dùng thử ngay</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CBD5E0]" />
      <div className="w-[1px] h-screen bg-[#CBD5E0] absolute right-[481px]" />
      <div className="absolute bottom-0 right-[132px]">
        <img src={HomePng} alt="" className="w-[80%] float-right" />
      </div>
    </div>
  );
};

export default SecondSlide;
