import React from "react";
import Logo from "../../../assets/images/logo.png";
import H5 from "../../../components/text/H5";
import DoorPng from "../../../assets/images/door.png";
import { joinCls } from "../../../utils/text.util";
import Animation from "../../../components/animation/Animation";

type FirstSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const FirstSlide = ({ className }: FirstSlideProps) => {
  return (
    <div className={joinCls("relative w-full h-screen bg-background snap-start", className)}>
      <Animation animation={[{ name: "slideInLeft", duration: "2.5s" }]} className="absolute w-full h-[1px] top-[390px]">
        <div className="w-full h-full bg-gray-300" />
      </Animation>
      <Animation animation={[{ name: "slideInLeft", duration: "2s" }]} className="absolute left-0 top-[704px] right-[36%] h-[1px]">
        <div className="w-full h-full bg-gray-300" />
      </Animation>
      <Animation animation={[{ name: "slideInUp", duration: "2s" }]} className="absolute top-[390px] bottom-0 right-[36%] w-[1px] h-[592px]">
        <div className="w-full h-full bg-gray-300" />
      </Animation>
      <div className="relative container mx-auto xl:px-20 py-14 h-full">
        <header className="w-full flex justify-between items-center">
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

        <div className="mt-[90px]">
          <h1 className="text-primary font-bold text-[160px] font-body tracking-[-4px] leading-[178px]">HomeLab.ai</h1>
          <div className="mt-[24px]">
            <h2 className="text-dark font-black text-[120px] tracking-[-2px] leading-[141px]">Kiến Trúc Sư</h2>
            <h2 className="text-dark font-black text-[120px] tracking-[-2px] leading-[141px]">Online!</h2>
          </div>
          <div className="mt-6">
            <span className="font-body text-2xl text-gray-500">Hãy cùng HomeLab.ai tạo nên thiết kế dành cho riêng bạn.</span>
          </div>
        </div>
        <div className="absolute bottom-[16px] right-[132px]">
          <img src={DoorPng} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
