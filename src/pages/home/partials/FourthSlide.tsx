import React from 'react';
import LivingRoomPng from '../../../assets/images/living-room.png';
import SkyscraperPng from '../../../assets/images/skyscraper.png';
const FourthSlide = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-[#27282C] grid grid-cols-12 w-full h-full">
        <div className="col-span-4 h-[40vh] border-r-[1px] border-[#CBD5E0] w-full">
          <img src={LivingRoomPng} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-3 h-[40vh] border- w-full flex flex-col justify-end items-center p-10 border-r-[1px] border-[#CBD5E0]">
          <span className="uppercase text-[#C8E3F6] text-2xl font-semibold">Chúng tôi tập trung vào dịch vụ xây dựng</span>
        </div>
        <div className="col-span-5 h-[40vh] border- w-full flex justify-center items-center">
          <img src={SkyscraperPng} alt="" className="h-full" />
        </div>
        <div className="h-[60vh] w-full col-span-7 border-t-[1px] border-[#CBD5E0] flex justify-center ">
          <span className="text-[120px] font-black mt-5 text-[#F0F4FD]">
            Chuyên gia <br /> xây dựng
          </span>
        </div>
        <div className="h-[60vh] w-full col-span-5 border-t-[1px] border-l-[1px] border-[#CBD5E0] flex flex-col">
          <div className="bg-red flex-grow"></div>
          <div className="bg-[#51A4F4] cursor-pointer border-t-[1px] border-[#CBD5E0] p-11 flex justify-center">
            <span className="text-2xl font-extrabold text-[#27282C] uppercase">Dùng thử ngay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSlide;
