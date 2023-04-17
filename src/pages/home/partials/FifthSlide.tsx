import React from "react";
import HomePng from "../../../assets/images/home-slide5.png";
import { joinCls } from "../../../utils/text.util";
import { randomImg } from "../../../utils/tools.util";

type FifthSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const FifthSlide = ({ className }: FifthSlideProps) => {
  return (
    <div className={joinCls("relative w-full h-screen bg-background", className)}>
      <div className="relative w-full">
        <div className="relative flex justify-center items-center mix-blend-multiply pt-8">
          <img src={HomePng} alt="" />
        </div>
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <h1 className="font-black w-full text-center text-[72px] text-dark py-[52px] border-y-[1px] border-dark bg-background mt-32">
            Trở thành <span className="font-body text-primary text-[92px]">HomeLab.ai</span> member!
          </h1>
        </div>

        <div className="absolute top-[132px] left-[16%]">
          <img
            src={randomImg(200, 200)}
            alt="avatar"
            className="w-[80px] h-[80px] hover:w-[124px] hover:h-[124px] object-cover drop-shadow-[8px_8px_0px_#C8E3F6] hover:drop-shadow-[16px_16px_0px_#C8E3F6] border-4 border-dark transition-all duration-300 ease-out"
          />
        </div>
        <div className="absolute top-[24px] right-[38%]">
          <img
            src={randomImg(200, 200)}
            alt="avatar"
            className="w-[80px] h-[80px] hover:w-[124px] hover:h-[124px] object-cover drop-shadow-[8px_8px_0px_#C8E3F6] hover:drop-shadow-[16px_16px_0px_#C8E3F6] border-4 border-dark transition-all duration-300 ease-out"
          />
        </div>
        <div className="absolute top-[152px] right-[12%]">
          <img
            src={randomImg(200, 200)}
            alt="avatar"
            className="w-[80px] h-[80px] hover:w-[124px] hover:h-[124px] object-cover drop-shadow-[8px_8px_0px_#C8E3F6] hover:drop-shadow-[16px_16px_0px_#C8E3F6] border-4 border-dark transition-all duration-300 ease-out"
          />
        </div>
      </div>
      <p className="font-body font-bold text-2xl text-dark text-center mt-8">
        Tạo ra giá trị riêng của bạn bằng cách trở thành thành viên của đại gia đình <span className="text-primary">HomeLab.ai.</span>
      </p>
    </div>
  );
};

export default FifthSlide;
