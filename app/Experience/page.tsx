

    import Image from 'next/image'
import React from 'react'
import photo1 from "@/public/photo.png"
    const Page = () => {
      return (
        <div className='flex flex-col gap-y-5'>

            <div className='h-screen text-black flex justify-center items-center relative bg-white w-full'>

                    <div className='absolute w-full top-0 left-0'>
                            {/* <Image   src={photo1} className='h-56 w-56 absolute -skew-y-0 -skew-x-12  left-[40%] top-[5%]  object-cover bg-black' alt="photo" />
                            <Image   src={photo1} className='h-56 w-56 relative -skew-y-0 -skew-x-12   object-cover left-[10%] top-[225px]  bg-black' alt="photo" />
                            <Image   src={photo1} className='h-56 w-56 relative -skew-y-0 -skew-x-12   object-cover left-[75%] top-[40%] bg-black' alt="photo" />
                            <Image   src={photo1} className='h-56 w-56 object-cover -skew-y-0 -skew-x-12   relative  left-[80%] top-[-100px]  bg-black' alt="photo" /> */}
                    </div>

                    <div className='relative  flex justify-center items-center w-full top-0 left-0'>

                            <h2 className='text-9xl max-w-3xl text-center  font-bold'>ALL MY EXPERIENCE</h2>

                    </div>


            </div>

            <div className='h-screen  bg-blue-400 w-full'>

</div>

        </div>
      )
    }
    
    export default Page