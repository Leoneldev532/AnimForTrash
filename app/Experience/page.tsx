"use client";
import landscape from "@/public/landscape.jpg";
import photo1 from "@/public/photo.png";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Page = () => {
  const im1 = useRef(null);
  const im2 = useRef(null);
  const im3 = useRef(null);
  const im4 = useRef(null);

  const num1 = useRef<HTMLDivElement>(null);
  const num2 = useRef<HTMLDivElement>(null);
  const num3 = useRef<HTMLDivElement>(null);
  const num4 = useRef<HTMLDivElement>(null);

  const cursorCircle = useRef(null);

  const [state, setActive] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // gsap.registerPlugin(ScrollTrigger);


  const addPosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let scroller  = ScrollSmoother.create({
    smooth: 1,
    effects: true, 
    smoothTouch: 0.1, 
  });

  const tl = gsap.timeline();
  const rl = gsap.timeline();
  const kl = gsap.timeline();
  const el = gsap.timeline();
  const il = gsap.timeline(
  {
    oncomplete: ()=>{
      scroller.effects(".box", {speed: 0.5, lag: 0.1});
    }
  }
  );

  useEffect(() => {
    tl.to(".card1exp", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "Circ.out",

      scrollTrigger: {
        trigger: ".card1exp",
        start: "top 50%",
        end: "bottom bottom",
        scrub: false,
        markers: true,
        toggleActions: "play reverse reverse reverse",
      },
    }).to(
      ".im",
      {
        scale: 1.2,
        duration: 1.4,
      },
      "-=0.5"
    );

    const handleMouseOver = () => {
      if (cursorCircle.current) {
        cursorCircle.current.textContent = "👨‍🎓";
      }
    };

    const handleMouseLeave = () => {
      if (cursorCircle.current) {
        cursorCircle.current.textContent = " ";
      }
    };

    if (im1.current && cursorCircle.current) {
      im1.current.onmouseover = handleMouseOver;
      im1.current.onmouseleave = handleMouseLeave;
    }

    if (
      im1.current &&
      im2.current &&
      im3.current &&
      im4.current &&
      num1.current &&
      num2.current &&
      num3.current &&
      num4.current
    ) {
      im2.current.addEventListener("click", () => {
        setActive({
          isActive1: false,
          isActive2: true,
          isActive3: false,
          isActive4: false,
        });
        if (num2.current?.classList.contains("active")) {
          rl.to(
            ".num1",
            {
              delay: 0.2,
              y: "-100%",
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<"
          )
            .to(
              ".num2",
              {
                y: "-100%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num3",
              {
                y: "-100%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num4",
              {
                y: "-100%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            );
        }
      });

      im1.current.addEventListener("click", () => {
        setActive({
          isActive1: true,
          isActive2: false,
          isActive3: false,
          isActive4: false,
        });
        if (num1.current?.classList.contains("active")) {
          kl.to(
            ".num1",
            {
              delay: 0.2,
              y: "0%",
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<"
          )
            .to(
              ".num2",
              {
                y: "0%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num3",
              {
                y: "0%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num4",
              {
                y: "0%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            );
        }
      });

      im3.current.addEventListener("click", () => {
        setActive({
          isActive1: false,
          isActive2: false,
          isActive3: true,
          isActive4: false,
        });
        if (num3.current?.classList.contains("active")) {
          el.to(
            ".num1",
            {
              delay: 0.2,
              y: "-200%",
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<"
          )
            .to(
              ".num2",
              {
                y: "-200%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num3",
              {
                y: "-200%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num4",
              {
                y: "-200%",
                duration: 0.5,
                ease: "power2.inOut",
              },
              "<"
            );
        }
      });

      im4.current.addEventListener("click", () => {
        setActive({
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: true,
        });
        if (num4.current?.classList.contains("active")) {
          il
            .to(
              ".num1",
              {
                delay: 0.2,
                y: "-300%",
                duration: 0.5,

                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num2",
              {
                y: "-300%",
                duration: 0.5,

                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              ".num3",
              {
                y: "-300%",
                duration: 0.5,

                ease: "power2.inOut",
              },
              "<"
            )
            .to(".num4", {
              y: "-300%",
              duration: 0.5,
              ease: "power2.inOut",
            }),
            "<";
        }
      });
    }

    window.addEventListener("mousemove", addPosition);
    return () => {
      window.removeEventListener("mousemove", addPosition);
    };
  }, []);

  

  return (
    <>
      <div  id="smooth-wrapper" className="flex flex-col relative gap-y-5">
        <div
          style={{ top: position.y - 20, left: position.x }}
          className="fixed     pointer-events-none easeOutExpo  flex justify-center items-center z-[99999]  h-16 w-16 rounded-full bg-red-400"
        >
          <span
            ref={cursorCircle}
            className="text-3xl transition-all  duration-500"
          >
            {" "}
          </span>
        </div>
        <div className="h-screen text-black flex justify-center items-center relative bg-white w-full">
          <div className="absolute w-full top-0 left-0">
            <div className="h-36 z-[999] w-56 absolute   left-[40%] top-[25%]">
              <Image
                ref={im1}
                src={photo1}
                className=" scale-100 hover:scale-110 transition-all  cursor-pointer duration-700   object-cover bg-black/20 hover:bg-black/70 "
                alt="photo"
              />
            </div>
            <div className="h-36 w-56 z-[999] relative left-[10%] top-[225px] ">
              <Image
                ref={im2}
                src={photo1}
                className="  scale-100 hover:scale-110 transition-all   cursor-pointer  duration-700    object-cover  bg-black/20 hover:bg-black/70 "
                alt="photo"
              />
            </div>
            <div className="h-36 w-56 relative  left-[76%] z-[999] top-[100px]">
              <Image
                ref={im3}
                src={photo1}
                className="scale-100 hover:scale-110 transition-all   cursor-pointer  duration-700   object-cover bg-black/20 hover:bg-black/70 "
                alt="photo"
              />
            </div>
            <div className="h-36 w-56 z-[999]  relative left-[80%] top-[200px]">
              <Image
                ref={im4}
                src={photo1}
                className=" object-cover scale-100 hover:scale-110 transition-all   cursor-pointer  duration-700   relative    bg-black/20 hover:bg-black/70 "
                alt="photo"
              />
            </div>

            <div className="w-36 h-56 bg-black flex flex-col text-white top-36 relative overflow-hidden">
              <div
                ref={num1}
                className={`num1 ${
                  state.isActive1 ? "active" : null
                }  text-9xl flex justify-center items-center transition-all ease-in-out flex-shrink-0  w-36 h-full`}
              >
                {" "}
                1{" "}
              </div>
              <div
                ref={num2}
                className={`num2 ${
                  state.isActive2 ? "active" : null
                }  text-9xl flex justify-center items-center transition-all ease-in-out flex-shrink-0  w-36 h-full`}
              >
                {" "}
                2{" "}
              </div>
              <div
                ref={num3}
                className={`num3 ${
                  state.isActive3 ? "active" : null
                }  text-9xl flex justify-center items-center transition-all ease-in-out flex-shrink-0  w-36 h-full`}
              >
                {" "}
                3{" "}
              </div>
              <div
                ref={num4}
                className={`num4 ${
                  state.isActive4 ? "active" : null
                }   text-9xl flex justify-center items-center transition-all ease-in-out flex-shrink-0  w-36 h-full`}
              >
                {" "}
                4{" "}
              </div>
            </div>
          </div>

          <div className="relative  flex justify-center items-center w-full top-0 left-0">
            <h2 className="text-9xl max-w-3xl text-center text-gray-400/80  police4 font-thin">
              ALL MY EXPERIENCE
            </h2>
          </div>
        </div>

        <div className="h-screen flex flex-col container1 justify-center items-center  w-full ">
          <div className="w-11/12 h-[70vh] card1exp overflow-hidden  bg-black ">
            <Image
              src={landscape}
              alt="image"
              className="im object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="h-screen flex flex-col  justify-center items-center  w-full ">
          <div className="w-11/12 h-[70vh]   bg-black "></div>
        </div>
      </div>

      <div className="relative  flex justify-center items-center w-full top-0 left-0">
        <h2 className="text-9xl max-w-3xl text-center  font-thin">
          ALL MY EXPERIENCE
        </h2>
      </div>
    </>
  );
};

export default Page;
