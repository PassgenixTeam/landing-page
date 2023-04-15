import React from 'react';
import Logo from '../../../assets/images/logo.png';
import H5 from '../../../components/text/H5';
import { Link } from 'react-router-dom';
import DoorPng from '../../../assets/images/door.png';

const FirstSlide = () => {
  return (
    <div className="w-full h-screen bg-[#F0F4FD] py-14">
      <header className="w-full flex justify-between items-center  px-[132px]">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex justify-around items-center gap-12">
          <H5 color="#51A4F4">HomeLab.ai là gì</H5>

          <H5>Dành cho customer</H5>
          <H5>Dành cho freelance</H5>
          <H5>Dành cho StakeHolder</H5>
        </div>
      </header>
      <div className="mt-[40px]">
        <div className=" px-[132px]">
          <span className="text-[#51A4F4] font-bold text-[160px]">HomeLab.ai</span>
        </div>
        <hr />
        <div className="mt-6  px-[132px]">
          <span className="text-[#27282C] font-black text-[120px]">
            Kiến trúc sư <br /> online!
          </span>
        </div>
        <hr />
        <div className="mt-6 px-[132px]">
          <span className="font-normal text-2xl text-[#718096]">Hãy cùng HomeLab.ai tạo nên thiết kế dành cho riêng bạn</span>
        </div>
      </div>
      <div className="absolute bottom-0 right-[132px]">
        <img src={DoorPng} alt="" />
      </div>
    </div>
  );
};

export default FirstSlide;
