import React from 'react';
import HomePng from '../../../assets/images/home-slide5.png';

const FifthSlide = () => {
  return (
    <div className="w-full h-screen py-14 flex flex-col justify-center items-center relative">
      <div className="ml-24">
        <img src={HomePng} alt="" />
      </div>
      <div>
        <span className="font-bold text-2xl text-[#27282C]">
          Tạo ra giá trị riêng của bạn bằng cách trở thành thành viên của đại gia đình <span className="text-[#51A4F4]">HomeLab.ai.</span>
        </span>
      </div>
      <div className="p-[52px] border-y-[1px] border-[#27282C] absolute w-full flex justify-center">
        <span className="font-black text-[72px] text-[#27282C]">
          Trở thành <span className="text-[#51A4F4]">HomeLab.ai</span> member!
        </span>
      </div>
    </div>
  );
};

export default FifthSlide;
