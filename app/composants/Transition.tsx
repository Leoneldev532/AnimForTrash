import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import SplitType from "split-type";

const Transition = ({ timeline }: { timeline: gsap.core.Timeline }) => {
  useGSAP(() => {
    const txt = document.querySelectorAll(".wel");

    txt.forEach((char: any) => {
      const ty = new SplitType(char, { types: "chars,words" });
      timeline
        .from(ty.chars, {
          opacity: 0,
          ease: "power3",
          duration: 1,
          skewY: 30,
          stagger: {
            amount: 0.5,
          },
          y: 200,
        })
        .to(".par", {
          height: "auto",
          overflow: "visible",
        })
        .to(".wel", {
          duration: 0.8,
          ease: "power3",
          scale: 10,
          x: -440,
        })
        .to(
          ".eletter",
          {
            duration: 1.8,
            ease: "sine.inOut",
            scale: 40,
          },
          "<"
        ).to(".trans", {
            
        });
    });
  });
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    const startTime = performance.now();
    const updateLoadingProgress = () => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const loadingProgress = Math.min(elapsedTime / 5000, 1);
      setLoadingProgress(loadingProgress);
    };

    const timerId = setInterval(updateLoadingProgress, 100);
    return () => clearInterval(timerId);
  });
  return (
    <div className="w-full trans min-h-screen flex overflow-hidden justify-center items-center  z-10 bg-black absolute -top-[9.9rem] left-0">
      <div className="absolute uppercase z-50 text-white par text-8xl h-28 fontt  overflow-hidden">
        {/* <span> {`${(loadingProgress * 100).toFixed(0)}%`} </span> */}
        <h2 className="wel">
          WELCOME <span className="eletter">E</span>VERYONE
        </h2>
      </div>
    </div>
  );
};

export default Transition;
