import React, { useEffect, useRef } from "react";
import Logo from "../../../assets/images/logo.png";
import H5 from "../../../components/text/H5";
import DoorPng from "../../../assets/images/door.png";
import { joinCls } from "../../../utils/text.util";
import Animation from "../../../components/animation/Animation";
import { useObserver } from "../hooks/useObserver";

type FirstSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const FirstSlide = ({ className }: FirstSlideProps) => {
  const { containerRef, isObserved } = useObserver();

  return (
    <div ref={containerRef} className={joinCls("relative w-full h-screen bg-background overflow-hidden", className)}>
      <Animation watching={isObserved} animation={[{ name: "slideInLeft", duration: "4s" }]} className="absolute w-full h-[1px] top-[390px]">
        <div className="w-full h-full bg-gray-300" />
      </Animation>
      <Animation watching={isObserved} animation={[{ name: "slideInLeft", duration: "3s" }]} className="absolute left-0 top-[704px] right-[36%] h-[1px]">
        <div className="w-full h-full bg-gray-300" />
      </Animation>
      <Animation watching={isObserved} animation={[{ name: "slideInUp", duration: "3s" }]} className="absolute top-[390px] bottom-0 right-[36%] w-[1px] h-[592px]">
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
          <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1.2s" }]}>
            <h1 className="text-primary font-bold text-[160px] font-body tracking-[-4px] leading-[178px]">HomeLab.ai</h1>
          </Animation>
          <div className="mt-[24px]">
            <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1.2s", delay: "1s" }]}>
              <h2 className="text-dark font-black text-[120px] tracking-[-2px] leading-[141px]">Kiến Trúc Sư</h2>
            </Animation>
            <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1.2s", delay: "1.4s" }]}>
              <h2 className="text-dark font-black text-[120px] tracking-[-2px] leading-[141px]">Online!</h2>
            </Animation>
          </div>
          <div className="mt-8">
            <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "1s", delay: "3s" }]}>
              <span className="font-body text-2xl text-gray-500">Hãy cùng HomeLab.ai tạo nên thiết kế dành cho riêng bạn.</span>
            </Animation>
          </div>
        </div>
        <div className="absolute bottom-[16px] right-[132px]">
          <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "1s", delay: "1.6s" }]}>
            <img src={DoorPng} alt="" />
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
