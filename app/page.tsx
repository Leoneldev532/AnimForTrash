

"use client"
import image1 from "@/public/1.jpg"
import image2 from "@/public/2.jpg"
import image3 from "@/public/3.jpg"
import image4 from "@/public/4.jpg"
import Image from 'next/image'
import { useEffect, useRef } from 'react'
  const Page = () => {
    
    const btnHover = useRef<HTMLButtonElement | null >(null)


    useEffect(()=>{

      const progressbarre = document.querySelectorAll(".progressbarre") as NodeListOf<HTMLDivElement> 
      const progressligne = document.querySelectorAll(".progressligne") as NodeListOf<HTMLDivElement> 
      const txtprogress = document.querySelectorAll(".txtprogress") as NodeListOf<HTMLDivElement> 
      const imageSlides = document.querySelectorAll(".imageslide") as NodeListOf<HTMLDivElement> 

    


      const moveProgression = async (idelement:number) => {
        return new Promise<void>((resolve) => {
       let currentHeight = 0;

       txtprogress[idelement].className += " active"


        const  intervalId  =  setInterval(()=>{
          currentHeight += 1;
          slideMouv(idelement)
          progressbarre[idelement].style.height = currentHeight + "%"
          
          if (currentHeight >= 100) {
            clearInterval(intervalId);
            resolve();

            progressbarre[idelement].style.height = 0 + "%"
          
            
            txtprogress[idelement].classList.remove("active")

          }
        },5000/100)
        
      });
        
      }

      let shouldRun = true;

      const UpdateProgression = async() =>{

        while (shouldRun) {
          for (let i = 0; i < progressligne.length; i++) {
            await moveProgression(i);
          }
        }

      }
     
      UpdateProgression()

      const slideMouv = (idElement:number) =>{
            
        if (imageSlides[idElement]) {
          imageSlides[idElement].style.opacity = "10";

          for (let i = 0; i < imageSlides.length; i++) {
            if (i !== idElement) {
              imageSlides[i].style.opacity = "0";
            }
          }

        }
      }



    },[])


    return (


      <div className="flex flex-col relative min-h-screen text-black justify-center h-full items-center w-full">

        <div className="absolute  left-[40%] top-[0%] lg:left-[80%]  lg:top-[30%] ">

        <svg
  width={802}
  height={811}
  viewBox="0 0 302 311"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_f_2_3)">
    <circle cx="144.5" cy="153.5" r="67.5" fill="#38BBF4" />
  </g>
  <defs>
    <filter
      id="filter0_f_2_3"
      x="-12.3"
      y="-3.3"
      width="313.6"
      height="313.6"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur
        stdDeviation="44.65"
        result="effect1_foregroundBlur_2_3"
      />
    </filter>
  </defs>
</svg>
     

        </div>

                <div className="justify-start  w-full items-start flex-col gap-y-2 flex py-5 xl:py-14 lg:px-0 px-4 sm:w-11/12 lg:w-9/12 2xl:w-8/12 ">
                  <h1 className="text-3xl lg:text-4xl lg:text-balance font-extrabold w-full max-w-full md:max-w-lg leading-normal">
                    Les lieux touristiques fantastiques et tres beau
                  </h1>
                  <span className="border-2 border-blue-400 font-bold  py-1 px-4  rounded-full "> Code By Leonel Yimga </span>
                </div>

                <div className="w-full flex justify-center  gap-y-8 xl:flex-row flex-col-reverse items-center xl:items-start h-full "> 


              <div className=" min-h-screen  gap-8  w-full flex px-4 lg:px-36 xl:px-0 justify-start items-center flex-col xl:w-1/2 2xl:w-1/3 xl:justify-start xl:items-start ">

              <div className='flex justify-start w-full items-start gap-x-4'> 
                      <div className="progressligne h-36 min-w-1 rounded-sm bg-gray-200 ">
                        
                        <div className='progressbarre transition-all ease-out duration-300 h-0 w-full bg-blue-500'> </div>
                     
                        </div>

                        <div className="flex flex-col gap-y-2">
                        <h2 className ={`txtprogress text-xl  max-w-sm font-bold `}   >
                        Parc national de Yosemite
                        </h2>
                        <p className="text-xs md:text-sm max-w-md">
                        Il est célèbre pour ses chutes d&apos;eau spectaculaires, ses falaises de granit imposantes et ses séquoias géants. Les visiteurs peuvent profiter de randonnées pédestres, d&apos;escalade, de camping et de photographie dans ce parc magnifique. </p>
                        </div>
                      </div>



                      
              <div className='flex justify-start w-full items-start gap-x-4'> 
                      <div className="progressligne h-36 min-w-1 rounded-sm bg-gray-200 ">
                        
                        <div className='progressbarre transition-all ease-out duration-300 h-0 w-full bg-blue-500'> </div>
                     
                        </div>

                       
                        <div className="flex flex-col gap-y-2">
                        <h2 className ={`txtprogress text-xl  max-w-sm font-bold `}   >
                        Plage de Navagio
                        </h2>
                        <p className="text-xs md:text-sm max-w-md">
                        La plage de Navagio est une baie isolée sur l île de Zante en Grèce. Elle est accessible uniquement par bateau et est entourée de falaises calcaires escarpées
                      </p> </div>
                      </div>






                      <div className='flex justify-start w-full items-start gap-x-4'> 
                      <div className="progressligne h-36 min-w-1 rounded-sm bg-gray-200 ">
                        
                        <div className='progressbarre transition-all ease-out duration-300 h-0 w-full bg-blue-500'> </div>
                     
                        </div>
                        
                        <div className="flex flex-col gap-y-2">
                        <h2 className ={`txtprogress text-xl  max-w-sm font-bold `}   >
                        Forêt amazonienne
                        </h2>
                        <p className="text-xs md:text-sm max-w-md">
                        Elle abrite une biodiversité incroyablement riche, y compris des milliers d espèces de plantes, d animaux et d insectes. Les visiteurs peuvent explorer la forêt en bateau, en kayak ou à pied, et découvrir les cultures indigènes qui vivent dans la région.
                        </p>
                        </div>

                      </div>


                      <div className='flex justify-start w-full items-start gap-x-4'> 
                      <div className="progressligne h-36 min-w-1 rounded-sm bg-gray-200 ">
                        
                        <div className='progressbarre transition-all ease-out duration-300 h-0 w-full bg-blue-500'> </div>
                     
                        </div>
                        <div className="flex flex-col gap-y-2">
                        <h2 className ={`txtprogress text-xl  max-w-sm font-bold `}   >
                        Canyon de l&apos;Antilope 
                        </h2>
                        <p className="text-xs md:text-sm max-w-md">
                        Les visiteurs peuvent explorer le canyon à pied avec un guide et prendre des photos étonnantes des formations rocheuses. Le canyon est particulièrement beau pendant les heures de lumière du jour, lorsque les rayons du soleil pénètrent dans les fissures et créent des effets de lumière spectaculaires </p>
                        </div>
                      </div>



                      
                    

                </div>

                <div className="xl:w-1/3 w-11/12 lg:w-9/12 xl:px-0  rounded-xl flex justify-center items-center xl:justify-start overflow-hidden relative h-[40vh]  xl:items-start lg:h-[450px]  xl:h-[750px]  ">

                    <div className="imageslide  absolute transition-all ease-out duration-500 rounded-xl  overflow-hidden  h-[550px]  w-full" >
                        <Image src={image1} className=" z-0 w-full h-full object-cover  "  alt="image" />
                    </div>
                    
                    <div className="imageslide absolute transition-all ease-out duration-500  rounded-xl  overflow-hidden h-[550px]  w-full" >
                        <Image src={image2} className=" z-0 w-full h-full object-cover   "  alt="image1" />
                    </div>
                    <div className="imageslide absolute transition-all ease-out duration-500  rounded-xl  overflow-hidden h-[550px]  w-full" >
                        <Image src={image3} className=" z-0 w-full h-full  object-cover   "  alt="image2" />
                    </div>

                    <div className="imageslide absolute transition-all ease-out duration-500  rounded-xl  overflow-hidden h-[550px]  w-full" >
                        <Image src={image4} className=" z-0 w-full h-full  object-cover   "  alt="image2" />
                    </div>

                </div>
                </div>

      </div>
    )
  }
  
  export default Page