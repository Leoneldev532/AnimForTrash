
"use client"
    import React, { useEffect, useState } from 'react'
    
    const Page = () => {

        const [Count,setCount] = useState(0)

        useEffect(()=>{


            const countInterval = setInterval(() => {
                setCount((count) => count + 1);
            }, 1000);
    
            return () => {
                clearInterval(countInterval);
            };
            
        },[])


      return (
        <div className='flex justify-center items-center'>

            <h1 className="text-5xl font-bold text-black "> {Count} </h1>

        </div>
      )
    }
    
    export default Page