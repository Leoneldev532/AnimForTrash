"use client";
import vector from "@/public/Vector 1.png";
import dessin from "@/public/dessin.svg";
import landscape from "@/public/landscape.jpg";
import musique from "@/public/musique.svg";
import photo from "@/public/photo.png";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
const Page = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(DrawSVGPlugin);

  const tl = gsap.timeline();
  //draws all elements with the "draw-me" class applied
  gsap.set(".draw-me", { duration: 1, drawSVG: 0 });

  useEffect(() => {
    tl.to(".divim1,.divim2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 0.8,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        // trigger: ".containertof",
        start: "+=800",
        end: "+=200",
        markers: true,
        scrub: 1,
      },
    });
  });

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: unknown) => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="w-full fg text-black flex relative flex-col justify-start  items-start  ">
      <div className="absolute text-black top-0 left-0  xl:h-[110vh] flex justify-center  items-center w-full">
        <h2 className="text-9xl str relative left-[32%]  "> ABOUT </h2>
      </div>
      <div className="w-full min-h-screen relative flex justify-center items-center">
        <div className="absolute z-0 left-0 top-40  ">
          <Image alt="kkkk" src={vector} className="object-cover" />
        </div>
        <div className="flex flex-col z-10   text-black gap-y-4 px-16 w-1/2">
          <div className=" rounded-full bg-black overflow-hidden h-96 w-96">
            <Image
              alt="hello"
              src={photo}
              className="object-cover w-full h-full"
            />
          </div>

          <span className="text-xl"> Hello I&apos;am Leonel </span>
          <h1 className="capitalize  text-gray-800  text-6xl font-bold max-w-md leading-snug ">
            {" "}
            FRONT-END DEVELOPPER{" "}
          </h1>
          <span className="text-xl text-semibold"> based Cameroun </span>
        </div>

        <div className="flex flex-col text-black gap-y-4 px-16 w-1/2">
          <p className="text-xl flex fg text-pretty flex-col gap-y-2 ">
            <span className="flex gap-x-4 justify-start items-center">
              <svg
                width="81"
                height="1"
                viewBox="0 0 81 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="81" y2="0.5" stroke="black" />
              </svg>
              <span className="font-bold">What About Me</span>
            </span>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium explicabo dolore consectetur! Vel necessitatibus
              inventore, nulla libero ab commodi, at earum alias, explicabo
              voluptatibus culpa. Iure dicta unde ducimus delectus?
            </span>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium explicabo dolore consectetur! Vel necessitatibus
              inventore, nulla libero ab commodi, at earum alias, explicabo
              voluptatibus culpa. Iure dicta unde ducimus delectus?
            </span>
          </p>
        </div>
      </div>

      <svg
        width={1452}
        height={141}
        viewBox="0 0 1452 141"
        fill="none"
        className="path"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1451 65.3435C1391 108.01 1444.5 -98.6565 1241.5 65.3435C1181.5 108.01 1277.5 -80.1448 1074.5 83.8552C1014.5 126.522 1035 -72.9883 832 91.0117C772 133.678 703 -53 500 111C440 153.667 413.5 -36.5 210.5 127.5C150.5 170.167 204 -23.5 1 140.5"
          stroke="#cfcfcf"
        />
      </svg>

      <div className="flex flex-col  containertof  p-16  w-full">
        <h2 className="text-5xl font-bold py-16"> my caps </h2>
        <div className="w-full  flex gap-x-16 py-16 ">
          <div className="flex divim1 opacity-0 cursor-pointer  rounded-xl overflow-hidden  translate-y-36 flex-col gap-y-4 w-1/2">
            <div className="  w-full h-[547px] rounded-xl  bg-black overflow-hidden">
              <Image
                src={landscape}
                alt="instituteur"
                className="h-full  w-full rounded-xl  object-cover"
              />
            </div>
            <span className="text-2xl opacity-60">
              Instituteur en Integration Web
            </span>
          </div>
          <div className="flex divim2 w-1/2  opacity-0 rounded-xl overflow-hidden flex-col gap-y-4 ">
            <div className="  w-full h-[547px] rounded-xl  overflow-hidden">
              <Image
                src={landscape}
                alt="instituteur"
                className="h-full w-full rounded-xl  object-cover"
              />
            </div>
            <span className="text-2xl opacity-60">Front-End developper</span>
          </div>
        </div>
      </div>

      <svg
        width={1452}
        height={141}
        viewBox="0 0 1452 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1451 65.3435C1391 108.01 1444.5 -98.6565 1241.5 65.3435C1181.5 108.01 1277.5 -80.1448 1074.5 83.8552C1014.5 126.522 1035 -72.9883 832 91.0117C772 133.678 703 -53 500 111C440 153.667 413.5 -36.5 210.5 127.5C150.5 170.167 204 -23.5 1 140.5"
          stroke="#cfcfcf"
        />
      </svg>

      <div className="flex flex-col   p-16  w-full">
        <h2 className="text-5xl font-bold py-16"> My Hobbies </h2>

        <div className="w-full  justify-between flex gap-x-4 ">
          <div className="flex gap-x-4">
            <div className="flex   cursor-pointer hover:bg-black-/20 backdrop-blur-sm rounded-lg border-2 border-gray-800/10 flex-col gap-y-6 p-4">
              <Image
                src={musique}
                alt="instituteur"
                className="h-36 w-36 object-contain"
              />
              <span> Musique </span>
            </div>
            <div className="flex  cursor-pointer hover:bg-black-/20 backdrop-blur-sm rounded-lg border-2 border-gray-800/10 flex-col gap-y-6 p-4">
              <Image
                src={dessin}
                alt="instituteur"
                className="h-36 w-36 object-contain"
              />
              <span> Dessin </span>
            </div>

            <div className="flex   cursor-pointer hover:bg-black-/20 backdrop-blur-sm rounded-lg border-2 border-gray-800/10 flex-col gap-y-6 p-4">
              <Image
                src={musique}
                alt="instituteur"
                className="h-36 w-36 object-contain"
              />
              <span> Tech </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="opacity-60 flex gap-x-4  justify-center items-center text-xl">
              {" "}
              <ArrowLeft /> <span>My Favour hobbies</span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[30vh] p-16 justify-start items-start">
        <h2 className="text-5xl font-bold "> My Motto </h2>
        <h2 className="w-full text-center  text-4xl py-16">
          {" "}
          {" '' Make it simple and easy '' "}
        </h2>
      </div>
    </div>
  );
};

export default Page;
