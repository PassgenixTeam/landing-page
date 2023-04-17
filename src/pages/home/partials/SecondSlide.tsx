import React from "react";
import HomePng from "../../../assets/images/home-slide2.png";
import { joinCls } from "../../../utils/text.util";

type SecondSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const SecondSlide = ({ className }: SecondSlideProps) => {
  return (
    <div className={joinCls("w-full h-screen bg-primary py-14 flex flex-col justify-center relative snap-start", className)}>
      <div className="">
        <div className="px-[132px]">
          <span className="font-display font-black text-light text-[120px] tracking-[-2px] leading-[141px]">
            Tạo ra thiết kế <br /> Cho riêng bạn
          </span>
        </div>
        <div className="mt-6 px-[132px]">
          <span className="font-body text-2xl text-light">Nhiều tính năng và công cụ mới được cập nhật liên tục.</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-700 mt-7" />
      <div className="px-[132px] py-[84px] ">
        <div className="inline-block bg-dark hover:bg-gray-700 active:bg-gray-800 px-[45px] py-[22px] transition-all duration-300 ease-out cursor-pointer">
          <span className="font-display font-bold text-2xl uppercase text-background tracking-[2px]">Dùng thử ngay</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-700" />
      <div className="w-[1px] h-screen bg-gray-700 absolute right-[481px]" />
      <div className="absolute bottom-0 right-[132px]">
        <img src={HomePng} alt="" className="w-[80%] float-right" />
      </div>
    </div>
  );
};

export default SecondSlide;
