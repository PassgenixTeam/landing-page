import React from 'react';
import Logo from '../../../assets/images/logo.png';
import FacebookSvg from '../../../assets/icons/facebook.svg';
import SmartPhoneLineSvg from '../../../assets/icons/smartphone-line.svg';
import LocationSvg from '../../../assets/icons/location.svg';

const Footer = () => {
  return (
    <footer className="flex px-[132px] border-t-[1px] border-[#2D3748] py-[72px]  flex-wrap">
      <div className="w-1/2">
        <img src={Logo} alt="" />
      </div>
      <div className="flex w-[50%] flex-wrap">
        <div className="w-1/2 flex flex-col">
          <span className="text-[#27282C] text-[32px] font-black mb-[32px]">Sản phẩm</span>
          <span className="text-[#27282C] text-[16px] font-bold mb-[16px]">HomeLab.ai</span>
          <span className="text-[#27282C] text-[16px] font-bold mb-[16px]">Home Freelance</span>
          <span className="text-[#27282C] text-[16px] font-bold mb-[16px]">Home Share</span>
        </div>

        <div className="w-1/2 flex flex-col">
          <span className="text-[#27282C] text-[32px] font-black mb-[32px]">Liên hệ</span>
          <div className="flex items-center gap-3  mb-[16px]">
            <img src={FacebookSvg} alt="" />
            <span className="text-[#27282C] text-[16px] font-bold">HomeLab.ai</span>
          </div>
          <div className="flex items-center gap-3  mb-[16px]">
            <img src={SmartPhoneLineSvg} alt="" />
            <span className="text-[#27282C] text-[16px] font-bold">+84 (0)94 667 21 01</span>
          </div>
          <div className="flex items-center gap-3  mb-[16px]">
            <img src={LocationSvg} alt="" />
            <span className="text-[#27282C] text-[16px] font-bold">Tầng 2, 102 Nguyễn Minh Chấn, quận Liên Chiểu, Đà Nẵng</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
