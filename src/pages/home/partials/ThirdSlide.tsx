import React from 'react';
import DrawingPng from '../../../assets/images/drawing-slide3.png';

const ThirdSlide = () => {
  return (
    <div className="w-full h-screen bg-[#C8E3F6] py-14 flex flex-col justify-center relative items-end">
      <div className="w-full flex flex-col">
        <div className="px-[132px] w-full">
          <span className="text-[#51A4F4] font-bold text-[120px] float-right text-right">
            <span className="text-[#27282C]">Nhiều</span> công việc <br />
          </span>
        </div>

        <div className="w-full bg-[#2D3748] h-[1px]" />

        <div className="px-[132px] w-full">
          <span className="text-[#27282C] font-bold text-[120px] float-right text-right">hấp dẫn</span>
        </div>
      </div>
      <div className="px-[132px] py-[84px] ">
        <div className="inline-block bg-[#27282C] px-[45px] py-[22px] cursor-pointer">
          <span className="font-bold text-2xl uppercase text-[#FAFAFA] ">Cộng đồng freelancer</span>
        </div>
      </div>
      <div className="absolute left-[132px] w-[1px] bg-[#2D3748] h-screen" />

      <div className="absolute bottom-0 left-[132px]">
        <img src={DrawingPng} alt="" className="w-[80%]" />
      </div>
    </div>
  );
};

export default ThirdSlide;
