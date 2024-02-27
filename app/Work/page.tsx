"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".section");

      function calculateEndValue(panels) {
        return panels.length * 100;
      }
      let endValue = calculateEndValue(panels);

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        duration: 1 / (panels.length - 1),
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + endValue,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div
      ref={component}
      className="w-full fg overflow-x-hidden text-black flex relative flex-col justify-start  items-start  bg-white "
    >
      <div className="text-5xl  min-h-screen flex  flex-col  gap-y-36 justify-center items-center ">
        <h1 className="text-9xl leading-tight w-3xl   w-full font-extrabold">
          We craft digital experiences{" "}
          <span className="text-green-400"> . </span>
        </h1>
        <div className="w-full flex justify-between items-center px-3">
          <div className="gap-x-4 flex justify-start items-center">
            <div className="h-16 w-16 bg-black text-white rounded-full text-center flex text-bold text-2xl justify-center items-center">
              5
            </div>
            <span className="text-2xl opacity-70">Experience</span>
          </div>
          <div className="flex gap-x-8">
            <span className="text-3xl max-w-xl">
              We build engaging digital products, websites and e-commerce
              solutions.
            </span>
            <div className=" bg-gray-800 cursor-pointer hover:bg-green-400 hover:text-black  p-5 flex justify-center items-center text-white rounded-full bg-black-400">
              <span className="text-2xl"> exploire My Work </span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={slider}
        // ref={containerRef}
        className="flex   main w-full  gap-x-8 py-8 gap-y-8"
      >
        <div className="section w-[100vw] bg-red-400  flex-shrink-0 flex gap-x-8  h-[100vh] ">
          <div className="w-1/3 max-h-[444px] flex flex-col gap-y-4  px-4">
            <h2 className="text-5xl font-bold"> Work </h2>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aut
              dolorum, explicabo ab placeat veritatis eaque eos necessitatibus
            </span>
          </div>

          <div className="w-1/3 max-h-[444px] bg-red-400  rounded-2xl  flex flex-col gap-y-4  p-10">
            <h2 className="text-5xl font-bold"> Work </h2>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aut
              dolorum, explicabo ab placeat veritatis eaque eos necessitatibus
            </span>
          </div>

          <div className="w-1/3 max-h-[444px] bg-red-400  rounded-2xl  flex flex-col gap-y-4  p-10">
            <h2 className="text-5xl font-bold"> Work </h2>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aut
              dolorum, explicabo ab placeat veritatis eaque eos necessitatibus
            </span>
          </div>
        </div>

        <div className="section w-[100vw] bg-green-400 flex-shrink-0 flex gap-x-8  h-[100vh] ">
          <div className="w-1/3 max-h-[444px] bg-red-400  rounded-2xl  flex flex-col gap-y-4  p-10">
            <h2 className="text-5xl font-bold"> Work </h2>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aut
              dolorum, explicabo ab placeat veritatis eaque eos necessitatibus
            </span>
          </div>

          <div className="w-1/3 max-h-[444px] bg-red-400  rounded-2xl  flex flex-col gap-y-4  p-10">
            <h2 className="text-5xl font-bold"> Work </h2>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aut
              dolorum, explicabo ab placeat veritatis eaque eos necessitatibus
            </span>
          </div>
        </div>

        <div className="section w-[100vw] bg-blue-400  flex-shrink-0 flex gap-x-8  h-[100vh] ">
          <div className="w-1/3 max-h-[444px] bg-red-400  rounded-2xl  flex flex-col gap-y-4  p-10">
            <h2 className="text-5xl font-bold"> Work </h2>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aut
              dolorum, explicabo ab placeat veritatis eaque eos necessitatibus
            </span>
          </div>

          <div className="w-1/3 max-h-[444px] bg-red-400  rounded-2xl  flex flex-col gap-y-4  p-10">
            <h2 className="text-5xl font-bold"> Work </h2>
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aut
              dolorum, explicabo ab placeat veritatis eaque eos necessitatibus
            </span>
          </div>
        </div>
      </div>
      <div className="w-[100vw] bg-gray-400 h-[100vh] "></div>
      <div className="w-[100vw] bg-green-400 h-[100vh] "></div>
      <div className="w-[100vw] bg-lime-400 h-[100vh] "></div>
      <div className="w-[100vw] bg-orange-400 h-[100vh] "></div>
      <div className="w-[100vw] bg-emerald-400 h-[100vh] "></div>
    </div>
  );
};

export default Page;
