"use client";
import moi from "@/public/landscape.jpg";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import CardVideo from "../composants/CardWork";
import Transition from "../composants/Transition";
import SplitType from "split-type";
import PasseTempsCard from "../composants/passeTempsCard";
const Page = () => {
  // const videoref = useRef<HTMLVideoElement | null>()
  // const hoverbloc = useRef<HTMLDivElement | null >()

  // const isHover = useHover(hoverbloc)
  //  useEffect(()=>{
  //     if(isHover){
  //         const  cursorpointer =  document.querySelector(".cursorpointer")
  //         cursorpointer.style.backgroundColor ="red"

  //         // cursorpointer.offsetWidth = 400

  //     }else{

  //         document.querySelector(".cursorpointer").style.backgroundColor ="transparent"
  //     }
  //  })

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  useGSAP(() => {
    
    const cardme: HTMLDivElement[] = gsap.utils.toArray(".cardme");
    const im: HTMLDivElement[] = gsap.utils.toArray(".im");

    gsap.registerPlugin(ScrollTrigger);

    tl.to(
      cardme,
      {
        duration: 0.7,
        stagger: 0.2,
        ease: "sine",
        clipPath: " polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
      "-=0.8"
    )
      .to(
        im,
        {
          duration: 0.7,
          scale: 1.2,

          ease: "sine",
        },
        "<"
      )
      .from(
        ".cvbtn",
        {
          y: 140,
          duration: 0.4,
          ease: "sine",
        },
        "<"
      )
      .from(
        ".myname",
        {
          y: 250,
          skewY: 30,
          transformOrigin: "10% 20%",
          duration: 1.2,
          ease: "sine",
        },
        "<"
      )
      .from(
        ".myposition",
        {
          y: 250,
          skewY: 30,
          ease: "sine",
          transformOrigin: "10% 20%",
          duration: 0.7,
        },
        "<"
      );

    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const text4 = document.querySelectorAll(".txt4");

    text4.forEach((char: any) => {
      const text = new SplitType(char, { types: "chars,words,lines" });

      tl.fromTo(
        text.words,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          delay: 0.2,
          opacity: 1,
          duration: 0.7,
          ease: "power3",
          stagger: {
            amount: 0.2,
          },
          transformOrigin: " 45.5234px 14px",
          scrollTrigger: {
            trigger: char,
            start: "top 95%",
            end: "bottom 95%",
            scrub: 7,
            markers: true,
            toggleActions: "restart none none reverse",
          },
        }
      );
    });

  });

  return (
    <div className="flex   relative flex-col  grayscale fontt top-0 left-0   w-full  text-black gap-y-4 justify-center items-center">
      <Transition timeline={tl} />
      <div className="w-full px-10 flex justify-between items-end">
        <div className="cardme h-[550px] w-[470px] bg-gray-400/40 ">
          <Image
            src={moi}
            className="im h-full object-cover w-full"
            alt="photo"
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <Link
            className="border overflow-hidden flex-shrink-0 w-56 py-3  px-3 border-black rounded-full"
            href="/"
          >
            <p className="text-sm cvbtn text-center">GET MY CV</p>
          </Link>

          <div className=" py-2 flex justify-start overflow-hidden text-7xl">
            <h1 className="myname fontt">Leonel Yimga </h1>
          </div>

          <div className=" py-2  overflow-hidden text-3xl">
            <h4 className="ff myposition italic text-3xl font-thin ">
              front-end developper
            </h4>
          </div>
        </div>

        <div className="cardme h-[290px] w-[270px] bg-gray-400/40 ">
          <Image
            src={moi}
            className="im h-full object-cover w-full"
            alt="photo"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-start items-start gap-y-4 px-10  py-36 ">
        <div className="flex w-1/2  py-16 ">
          <p className="txt4 overflow-hidden text-black   text-3xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis in
            earum quos at officiis alias cupiditate
          </p>
        </div>
        <div className="min-h-screen flex py-16 justify-center items-center w-full">
          <CardVideo videoUrl={"video.mp4"} title={"egrowboost.com"} />
        </div>

        <div className="flex flex-col gap-y-16 w-full">
          <h2 className="text-4xl txt4  font-bold  ff ">
            {" "}
            MES PASSES TEMPS FAVORIS{" "}
          </h2>

          <div className="flex w-full gap-x-4">
            <div className="h-[500px] min-w-[400px] bg-gray-100"></div>

            <div className="w-full flex flex-col">
              <div className="flex border-b border-t cursor-pointer p-4 w-full border-black gap-x-4 justify-end items-end ">
                <div className="relative w-full h-full flex justify-between items-center">
                
                  <PasseTempsCard texte="programming" />
                </div>
              </div>
              <div className="flex border-b p-4 w-full cursor-pointer border-black gap-x-4 justify-end items-end ">
                <div className="w-full h-full flex justify-between items-center">
                  <span className="text-5xl h-full flex justify-center items-center">
                    {" "}
                    *{" "}
                  </span>
                  <h2 className="uppercase text-3xl  font-extrabold">
                    {" "}
                    dessin{" "}
                  </h2>
                </div>
              </div>

              <div className="flex border-b  p-4 w-full cursor-pointer border-black gap-x-4 justify-end items-end ">
                <div className="w-full h-full flex justify-between items-center">
                  <span className="text-5xl h-full flex justify-center items-center">
                    {" "}
                    *{" "}
                  </span>
                  <h2 className="uppercase text-3xl  font-extrabold">
                    {" "}
                    musique{" "}
                  </h2>
                </div>
              </div>

              <div className="flex border-b  p-4 w-full cursor-pointer border-black gap-x-4 justify-end items-end ">
                <div className="w-full h-full flex justify-between items-center">
                  <div className="text-5xl h-full flex justify-center items-center  ">
                    {" "}
                    <span>*</span>{" "}
                  </div>
                  <h2 className="uppercase text-3xl  font-extrabold">
                    {" "}
                    manga{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 ">
            <h2 className="italic text-4xl py-4"> Mon quotidien en 2024 </h2>

            <div className="flex w-full justify-start items-end  gap-x-4 ">
              <div className="w-8/12 flex-shrink-0 min-h-[80vh] bg-red-400 rounded-2xl "></div>
              <div className="w-3/12 flex-shrink-0 h-[40vh] bg-blue-400 rounded-2xl "></div>
            </div>

            <div className="flex   py-16 ">
              <h3 className="text-3xl italic ff">I can help you</h3>
              <div className="flex flex-col gap-y-4 ">
                <div className="flex flex-col mt-8 py-6 gap-y-6 border-black/20 border-y">
                  <span className="italic text-2xl"> Web integration </span>

                  <p className="italic text-lg txt4 text-black/60">
                    Turn concepts into captivating interactive experiences.
                    Mastery of languages and JS frameworks to craft modern,
                    responsive interfaces.
                  </p>
                </div>

                <div className="flex  py-6 gap-y-6 border-black/20 border-y">
                  <span className="italic text-2xl txt4">
                    {" "}
                    Web integration{" "}
                  </span>

                  <p className=" text-lg txt4  text-black/60">
                    Transition designs from paper to pixel with precision. Build
                    aesthetic, user-friendly, and cross-compatible websites
                    using the latest integration techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto py-16 flex justify-center items-center  gap-y-4">
            <h2 className="text-5xl italic txt4">
              {" "}
              ‘’ Make it easy and simple ‘’{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
