import React from "react";
import DrawingPng from "../../../assets/images/drawing-slide3.png";
import { joinCls } from "../../../utils/text.util";
import { useObserver } from "../hooks/useObserver";
import Animation from "../../../components/animation/Animation";

type ThirdSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const ThirdSlide = ({ className }: ThirdSlideProps) => {
  const { containerRef, isObserved } = useObserver();

  return (
    <div ref={containerRef} className={joinCls("relative w-full h-screen bg-[#C8E3F6] py-16 flex flex-col items-end overflow-hidden", className)}>
      <div className="w-full flex flex-col items-end">
        <div className="container mx-auto xl:px-20 flex justify-end gap-6">
          <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s" }]}>
            <h1 className="font-display font-black text-dark tracking-[-4px] text-[152px] float-right">Nhiều</h1>
          </Animation>
          <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "0.6s" }]}>
            <h1 className="font-display font-black text-primary tracking-[-4px] text-[152px] float-right">công việc</h1>
          </Animation>
        </div>

        <Animation watching={isObserved} animation={[{ name: "slideInLeft", duration: "3s" }]} className="w-full h-[1px]">
          <div className="w-full h-full bg-dark" />
        </Animation>

        <div className="container mx-auto xl:px-20 flex justify-end">
          <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "1s" }]}>
            <h1 className="font-display font-black text-dark tracking-[-4px] text-[152px]">hấp dẫn</h1>
          </Animation>
        </div>
      </div>
      <div className="container mx-auto xl:px-20 py-[52px] flex justify-end">
        <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "2s" }]}>
          <div className="bg-dark hover:bg-gray-700 active:bg-gray-800 px-[45px] py-[22px] transition-all duration-300 ease-out cursor-pointer">
            <span className="font-display font-bold text-2xl uppercase text-background tracking-[2px]">Cộng đồng freelancer</span>
          </div>
        </Animation>
      </div>

      <Animation watching={isObserved} animation={[{ name: "slideInDown", duration: "3s", delay: "1s" }]} className="absolute top-0 left-[132px] w-[1px] h-screen">
        <div className="w-full h-full bg-dark" />
      </Animation>

      <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "3s" }]} className="absolute bottom-[-64px] left-[32px]">
        <img src={DrawingPng} alt="" />
      </Animation>
    </div>
  );
};

export default ThirdSlide;
