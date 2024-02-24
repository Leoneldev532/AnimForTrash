


  import React from 'react'
  
  const Page = () => {
    return (
      <div className="flex flex-col justify-start items-start w-full">
          <div className='h-[100vh] flex flex-col justify-between items-center bg-black w-full'>
              
               <div className="w-full flex justify-center h-full items-center">

                    <div className='h-96 w-96 shadow-md shadow-white border-[12px]  rounded-full '>

                    </div>

                </div>

                <div className= 'w-full justify-between items-center p-8 flex '>
                    <div className="flex flex-col gap-y-2">
                      <h2 className="font-bold text-2xl"> Web designer </h2>
                      <span className="opacity-90 "> From IN </span>
                    </div>


                    <div className="flex gap-x-4">

                        <div className="h-12 w-12 rounded-full bg-white">

                        </div>
                        <div className="h-12 w-12 rounded-full bg-white">

                        </div>
                        <div className="h-12 w-12 rounded-full bg-white">

                        </div>

                    </div>

                </div>
                  
          </div>
      </div>
    )
  }
  
  export default Page