import dessin from "@/public/dessin.svg";
import musique from "@/public/musique.svg";
import photo from "@/public/photo.png";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
const Page = () => {
  return (
    <div className="w-full fg text-black flex relative flex-col justify-start  items-start  bg-white ">
      <div className="absolute text-black top-0 left-0  h-[110vh] flex justify-center  items-center w-full">
        <h2 className="text-9xl str relative left-[32%]  "> ABOUT </h2>
      </div>
      <div className="w-full min-h-screen  flex justify-center items-center">
        <div className="flex flex-col   text-black gap-y-4 px-16 w-1/2">
          <div className="rounded-full bg-black overflow-hidden h-96 w-96">
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
      <div className="flex flex-col min-h-screen   p-16  w-full">
        <h2 className="text-5xl font-bold py-16"> my caps </h2>
        <div className="w-full  flex gap-x-4 ">
          <div className="flex flex-col gap-y-4 w-1/3">
            <div className="w-full h-[547px]  bg-black overflow-hidden">
              <Image
                src={photo}
                alt="instituteur"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-2xl opacity-60">
              Instituteur en Integration Web
            </span>
          </div>
          <div className="flex w-1/3 flex-col gap-y-4 ">
            <div className="w-full h-[547px]  bg-black overflow-hidden">
              <Image
                src={photo}
                alt="instituteur"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-2xl opacity-60">Front-End developper</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen   p-16  w-full">
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
    </div>
  );
};

export default Page;
