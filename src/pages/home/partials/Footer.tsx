import React from "react";
import Logo from "../../../assets/images/passgenix.png";
import FacebookSvg from "../../../assets/icons/facebook.svg";
import SmartPhoneLineSvg from "../../../assets/icons/smartphone-line.svg";
import LocationSvg from "../../../assets/icons/location.svg";
import { joinCls } from "../../../utils/text.util";

type FooterSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Footer = ({ className }: FooterSlideProps) => {
  return (
    <footer className={joinCls("flex px-[132px] border-t-[1px] border-dark py-[72px] flex-wrap bg-background", className)}>
      <div className="w-1/2">
        <img src={Logo} alt="" />
      </div>
      <div className="flex w-[50%] flex-wrap">
        <div className="w-1/2 flex flex-col">
          <span className="text-dark text-[32px] font-black mb-[32px]">Sản phẩm</span>
          <a className="font-body text-dark text-[16px] font-bold mb-[16px]">HomeLab.ai</a>
          <a className="font-body text-dark text-[16px] font-bold mb-[16px]">Home Freelance</a>
          <a className="font-body text-dark text-[16px] font-bold mb-[16px]">Home Share</a>
        </div>

        <div className="w-1/2 flex flex-col">
          <span className="text-dark text-[32px] font-black mb-[32px]">Liên hệ</span>
          <div className="flex items-center gap-3  mb-[16px]">
            <img src={FacebookSvg} alt="" />
            <a className="font-body text-dark text-[16px] font-bold">HomeLab.ai</a>
          </div>
          <div className="flex items-center gap-3  mb-[16px]">
            <img src={SmartPhoneLineSvg} alt="" />
            <a className="font-body text-dark text-[16px] font-bold">+84 (0)94 667 21 01</a>
          </div>
          <div className="flex items-start gap-3  mb-[16px]">
            <img src={LocationSvg} alt="" />
            <a className="font-body text-dark text-[16px] font-bold">Tầng 2, 102 Nguyễn Minh Chấn, quận Liên Chiểu, Đà Nẵng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
