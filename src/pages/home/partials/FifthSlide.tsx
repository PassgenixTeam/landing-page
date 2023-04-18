import React from "react";
import HomePng from "../../../assets/images/home-slide5.png";
import { joinCls } from "../../../utils/text.util";
import { randomImg } from "../../../utils/tools.util";
import { useObserver } from "../hooks/useObserver";
import Animation from "../../../components/animation/Animation";

type FifthSlideProps = {} & React.HTMLAttributes<HTMLDivElement>;

const FifthSlide = ({ className }: FifthSlideProps) => {
  const { containerRef, isObserved } = useObserver();

  const handleMemberAvatarMouseOvered = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const elements = target.parentElement!.children;

    for (let i = 0; i < elements.length; i++) {
      if (!(elements[i] instanceof HTMLDivElement)) continue;

      const element = elements[i] as HTMLDivElement;
      element.classList.add("opacity-100");
      element.classList.remove("opacity-0");
    }
  };

  const handleMemberAvatarMouseOuted = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const elements = target.parentElement!.children;

    for (let i = 0; i < elements.length; i++) {
      if (!(elements[i] instanceof HTMLDivElement)) continue;

      const element = elements[i] as HTMLDivElement;
      element.classList.remove("opacity-100");
      element.classList.add("opacity-0");
    }
  };

  return (
    <div ref={containerRef} className={joinCls("relative w-full h-screen bg-background", className)}>
      <div className="relative w-full">
        <div className="relative flex justify-center items-center mix-blend-multiply pt-8">
          <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "4s", delay: "0.5s" }]}>
            <img src={HomePng} alt="Home" />
          </Animation>
        </div>
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <Animation
            watching={isObserved}
            animation={[{ name: "fadeIn", duration: "0.8s" }]}
            className="w-full py-[64px] border-y-[1px] border-dark bg-background flex justify-center items-end gap-4 mt-28"
          >
            <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "1s", delay: "0.5s" }]}>
              <h1 className="font-black text-[72px] text-dark leading-[84px] tracking-[-2px]">Trở thành</h1>
            </Animation>

            <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "1s", delay: "1.2s" }]}>
              <h1 className="font-body text-primary font-bold text-[92px] leading-[84px] tracking-[-2px]">HomeLab.ai</h1>
            </Animation>

            <Animation watching={isObserved} animation={[{ name: "fadeIn", duration: "1s", delay: "1.8s" }]}>
              <h1 className="font-black text-[72px] text-dark leading-[84px] tracking-[-2px]">member!</h1>
            </Animation>
          </Animation>
        </div>

        <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "1.2s" }]} className="absolute top-[132px] left-[16%]">
          <div className="flex gap-6">
            <img
              src={randomImg(200, 200)}
              alt="avatar"
              className="w-[80px] h-[80px] hover:w-[124px] hover:h-[124px] object-cover drop-shadow-[8px_8px_0px_#C8E3F6] hover:drop-shadow-[16px_16px_0px_#C8E3F6] border-4 border-dark transition-all duration-300 ease-out"
              onMouseOver={handleMemberAvatarMouseOvered}
              onMouseOut={handleMemberAvatarMouseOuted}
            />
            <div className="border-4 border-dark bg-light px-[12px] py-[12px] drop-shadow-[16px_16px_0px_#C8E3F6] transition-all duration-300 ease-out opacity-0">
              <p className="font-body font-bold text-[16px]">Hi I'm Huy. Co-Founder</p>
            </div>
          </div>
        </Animation>

        <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "2s" }]} className="absolute top-[24px] right-[38%]">
          <div className="flex gap-6">
            <div className="border-4 border-dark bg-light px-[12px] py-[12px] drop-shadow-[16px_16px_0px_#C8E3F6] transition-all duration-300 ease-out opacity-0">
              <p className="font-body font-bold text-[16px]">Hi I'm Huy. Co-Founder</p>
            </div>
            <img
              src={randomImg(200, 200)}
              alt="avatar"
              className="w-[80px] h-[80px] hover:w-[124px] hover:h-[124px] object-cover drop-shadow-[8px_8px_0px_#C8E3F6] hover:drop-shadow-[16px_16px_0px_#C8E3F6] border-4 border-dark transition-all duration-300 ease-out"
              onMouseOver={handleMemberAvatarMouseOvered}
              onMouseOut={handleMemberAvatarMouseOuted}
            />
          </div>
        </Animation>

        <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "2.8s" }]} className="absolute top-[152px] right-[12%]">
          <div className="flex gap-6">
            <div className="border-4 border-dark bg-light px-[12px] py-[12px] drop-shadow-[16px_16px_0px_#C8E3F6] transition-all duration-300 ease-out opacity-0">
              <p className="font-body font-bold text-[16px]">Hi I'm Huy. Co-Founder</p>
            </div>
            <img
              src={randomImg(200, 200)}
              alt="avatar"
              className="w-[80px] h-[80px] hover:w-[124px] hover:h-[124px] object-cover drop-shadow-[8px_8px_0px_#C8E3F6] hover:drop-shadow-[16px_16px_0px_#C8E3F6] border-4 border-dark transition-all duration-300 ease-out"
              onMouseOver={handleMemberAvatarMouseOvered}
              onMouseOut={handleMemberAvatarMouseOuted}
            />
          </div>
        </Animation>
      </div>

      <Animation watching={isObserved} animation={[{ name: "fadeInUp", duration: "1s", delay: "2s" }]}>
        <p className="font-body font-bold text-2xl text-dark text-center mt-8">
          Tạo ra giá trị riêng của bạn bằng cách trở thành thành viên của đại gia đình <span className="text-primary">HomeLab.ai.</span>
        </p>
      </Animation>
    </div>
  );
};

export default FifthSlide;
