

    import React from 'react'
    
    const Page = () => {
      return (
        <div className='w-full flex relative justify-center overflow-hidden items-center h-[100vh] bg-white p-8'>
                <div className="h-full absolute text-black  top-0 left-0  flex justify-center  items-center w-full">
                    <h2 className="text-9xl str relative left-[32%]  "> ABOUT  </h2>
                </div>
            <div className="flex flex-col  fg text-black gap-y-4 px-16 w-1/2">
                <span className="text-xl"> Hello I&apos;am Leonel   </span>
                <h1 className='capitalize  text-gray-800  text-6xl font-bold max-w-md leading-snug '> FRONT-END DEVELOPPER </h1>
                <span className="text-xl text-semibold">  based Cameroun </span>
                </div>

            
                <div className="flex flex-col text-black gap-y-4 px-16 w-1/2">
                    <p className="text-xl flex fg text-pretty flex-col gap-y-2 ">
                        
                       <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
      )
    }
    
    export default Page