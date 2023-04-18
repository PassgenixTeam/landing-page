import React from "react";
import LivingRoomPng from "../../../assets/images/living-room.png";
import SkyscraperPng from "../../../assets/images/skyscraper.png";
import { joinCls } from "../../../utils/text.util";
import { useObserver } from "../hooks/useObserver";
import Animation from "../../../components/animation/Animation";

type FourthSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const FourthSlide = ({ className }: FourthSlideProps) => {
  const { containerRef, isObserved } = useObserver();

  return (
    <div ref={containerRef} className={joinCls("w-full h-screen overflow-hidden", className)}>
      <div className="bg-dark grid grid-cols-12 w-full h-full">
        <div className="col-span-4 h-[40vh] border-r-[1px] border-light w-full">
          <img src={LivingRoomPng} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-3 h-[40vh] w-full flex flex-col justify-end items-center p-10 border-r-[1px] border-light">
          <h2 className="uppercase text-secondary text-[24px] font-semibold tracking-[2px]">Chúng tôi tập trung vào dịch vụ xây dựng</h2>
        </div>
        <div className="col-span-5 h-[40vh] border- w-full flex justify-center items-center">
          <img src={SkyscraperPng} alt="" className="h-full" />
        </div>
        <div className="h-[60vh] w-full col-span-7 border-t-[1px] border-light">
          <div className="w-full h-full flex flex-col justify-center pl-[132px]">
            <Animation watching={isObserved} animation={[{ name: "fadeInLeft", duration: "1s" }]}>
              <h1 className="text-[120px] font-display font-black text-light leading-[140px]">Chuyên gia</h1>
            </Animation>
            <Animation watching={isObserved} animation={[{ name: "fadeInLeft", duration: "1s", delay: "0.4s" }]}>
              <h1 className="text-[120px] font-display font-black text-light leading-[140px]">Xây dựng</h1>
            </Animation>
          </div>
        </div>
        <div className="h-[60vh] w-full col-span-5 border-t-[1px] border-l-[1px] border-light flex flex-col">
          <div className="bg-red flex-grow"></div>
          <div className="bg-[#51A4F4] cursor-pointer border-t-[1px] border-light p-12 flex justify-center">
            <span className="text-[24px] font-extrabold text-dark uppercase tracking-[2px] leading-[28px]">Dùng thử ngay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSlide;
