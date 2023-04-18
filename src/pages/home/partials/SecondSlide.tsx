import React from "react";
import HomePng from "../../../assets/images/home-slide2.png";
import { joinCls } from "../../../utils/text.util";
import Animation from "../../../components/animation/Animation";
import { useObserver } from "../hooks/useObserver";

type SecondSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const SecondSlide = ({ className }: SecondSlideProps) => {
  const { containerRef, isObserved } = useObserver();

  return (
    <div ref={containerRef} className={joinCls("relative w-full h-screen bg-primary flex flex-col overflow-hidden", className)}>
      <div className="container mx-auto xl:px-20 pt-[136px]">
        <Animation watching={isObserved} animation={[{ name: "fadeInDown", duration: "2s" }]}>
          <h1 className="font-display font-black text-light text-[120px] tracking-[-2px] leading-[141px]">Tạo ra thiết kế</h1>
          <h1 className="font-display font-black text-light text-[120px] tracking-[-2px] leading-[141px]">Cho riêng bạn</h1>
        </Animation>
      </div>
      <div className="container mx-auto xl:px-20 mt-6">
        <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "1s", delay: "2s" }]}>
          <span className="font-body text-2xl text-light">Nhiều tính năng và công cụ mới được cập nhật liên tục.</span>
        </Animation>
      </div>
      <Animation watching={isObserved} animation={[{ name: "slideInLeft", duration: "2.5s" }]} className="mt-7">
        <div className="w-full h-[1px] bg-gray-700" />
      </Animation>

      <div className="container mx-auto xl:px-20 my-[84px] flex">
        <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "1s", delay: "3s" }]}>
          <div className="bg-dark hover:bg-gray-700 active:bg-gray-800 px-[45px] py-[22px] transition-all duration-300 ease-out cursor-pointer">
            <span className="font-display font-bold text-2xl uppercase text-background tracking-[2px]">Dùng thử ngay</span>
          </div>
        </Animation>
      </div>
      <Animation watching={isObserved} animation={[{ name: "slideInLeft", duration: "3s" }]}>
        <div className="w-full h-[1px] bg-gray-700" />
      </Animation>
      <Animation watching={isObserved} animation={[{ name: "slideInDown", duration: "3s", delay: "1s" }]} className="absolute right-[481px] w-[1px] h-screen">
        <div className="w-full h-full bg-gray-700 " />
      </Animation>
      <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "0.5s" }]} className="absolute bottom-[32px] right-[132px]">
        <img src={HomePng} alt="" className="w-[80%] float-right" />
      </Animation>
    </div>
  );
};

export default SecondSlide;
