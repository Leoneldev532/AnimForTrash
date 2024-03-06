"use client"
import Image from 'next/image'
import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import photo1 from "@/public/photo.png"
import landscape from "@/public/landscape.jpg"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
   
  const Page = () => {
    const im1 = useRef(null)
    const im2 = useRef(null)
    const im3 = useRef(null)
    const im4 = useRef(null)
  
    const cursorCircle = useRef<HTMLDivElement | null>(null);
  
    const [position, setPosition] = useState({x: 0, y: 0});
  
    const addPosition = (e: MouseEvent) => {
        setPosition({x: e.clientX, y: e.clientY});
    };
  
    useEffect(() => {
        if (im1.current && cursorCircle.current) {
            im1.current.addEventListener("mouseover", () => {
                cursorCircle.current.textContent = "👨‍🎓";
            });
  
            im1.current.addEventListener("mouseleave", () => {
                cursorCircle.current.textContent = " ";
            });
        }
  
        window.addEventListener('mousemove', addPosition);
        return () => {
            window.removeEventListener('mousemove', addPosition);
        };
    }, []);
  
    useEffect(() => {
 
          gsap.registerPlugin(ScrollTrigger);
  
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".card1exp",
              start: "top 80%",
              end: "bottom bottom",
              scrub: false,
              markers: true,
              toggleActions: "play none none reverse"
            }
          });
          tl.fromTo(".card1exp",{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "Circ.out"
          })
          .to(".im", {
            scale: 1.2,
            duration: 1.4
          }, "-=0.5");
     
      
    }, []);


      return (
        <div className='flex flex-col relative gap-y-5' >
            

                <div  style={{top:position.y - 20,left:position.x}} className='fixed     pointer-events-none easeOutExpo  flex justify-center items-center z-[99999]  h-16 w-16 rounded-full bg-red-400'>
                    <span ref={cursorCircle} className='text-3xl transition-all  duration-500'> </span>

              

            </div>
            <div className='h-screen text-black flex justify-center items-center relative bg-white w-full'>

                    <div className='absolute w-full top-0 left-0'> 
                        <div className='h-36 z-[999] w-56 absolute   left-[40%] top-[25%]'>
                            <Image ref={im1}  src={photo1} className=' scale-100 hover:scale-110 transition-all  cursor-pointer duration-700   object-cover bg-black' alt="photo" />
                        </div>
                          <div className='h-36 w-56 z-[999] relative left-[10%] top-[225px] '>
                            <Image ref={im2}   src={photo1} className='  scale-100 hover:scale-110 transition-all   cursor-pointer  duration-700    object-cover  bg-black' alt="photo" />
                            </div>
                            <div className="h-36 w-56 relative  left-[76%] z-[999] top-[100px]">
                            <Image ref={im3}   src={photo1} className='scale-100 hover:scale-110 transition-all   cursor-pointer  duration-700   object-cover bg-black' alt="photo" />
                            </div>
                            <div className='h-36 w-56 z-[999]  relative left-[80%] top-[200px]'>
                            <Image  ref={im4}   src={photo1} className=' object-cover scale-100 hover:scale-110 transition-all   cursor-pointer  duration-700   relative    bg-black' alt="photo" />
                            </div>
                    </div>

                    <div className='relative  flex justify-center items-center w-full top-0 left-0'>

                            <h2 className='text-9xl max-w-3xl text-center  font-thin'>ALL MY EXPERIENCE</h2>

                    </div>


            </div>

            <div className='h-screen flex flex-col container1 justify-center items-center  w-full '>

                <div className='w-11/12 h-[70vh] card1exp overflow-hidden  bg-black '>
                    <Image src={landscape} alt='image' className='im object-cover w-full h-full' />
                </div>



</div>

<div className='h-screen flex flex-col  justify-center items-center  w-full '>

<div className='w-11/12 h-[70vh]   bg-black '>

</div>



</div>

        </div>
      )
    }
    
    export default Page